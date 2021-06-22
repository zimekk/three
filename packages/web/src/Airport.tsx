import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { config, useSpring } from "@react-spring/core";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Stars,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Debug, Physics, useBox, useSphere } from "@react-three/cannon";
import styles from "./App.module.scss";

function Model(props) {
  const [group] = useBox(() => ({
    args: [25, 1.2, 25],
    type: "Static",
    ...props,
  }));
  const ref = useRef();
  const { scene } = useGLTF(require("./assets/lotnisko/1.0.glb").default);

  return (
    <group>
      <mesh ref={group}></mesh>
      <primitive ref={ref} object={scene} />
    </group>
  );
}

// https://github.com/luser/gamepadtest/blob/master/gamepadtest.js
const useGamepad = () => {
  const [index, setIndex] = useState(null);
  const [axes, setAxes] = useState(
    [...Array(4)].reduce((r, v, i) => Object.assign(r, { [i]: 0 }), {})
  );
  const [buttons, setButtons] = useState(
    [...Array(16)].reduce((r, v, i) => Object.assign(r, { [i]: 0 }), {})
  );

  useEffect(() => {
    if ("GamepadEvent" in window) {
      const handleGamepadConnected = (e) => {
        setIndex(e.gamepad.index);
      };
      const handleGamepadDisconnected = (e) => {
        setIndex(null);
      };

      window.addEventListener("gamepadconnected", handleGamepadConnected);
      window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

      return () => {
        window.removeEventListener("gamepadconnected", handleGamepadConnected);
        window.removeEventListener(
          "gamepaddisconnected",
          handleGamepadDisconnected
        );
      };
    } else {
      const i = setInterval(() => {
        const gamepads = navigator.getGamepads();
        for (let i = 0; i < gamepads.length; i++) {
          if (gamepads[i] && gamepads[i].index in controllers.current) {
            controllers.current[gamepads[i].index] = gamepads[i];
          }
        }
      }, 500);
      return () => {
        clearInterval(i);
      };
    }
  }, []);

  useFrame(() => {
    if (index !== null) {
      const gamepad = navigator.getGamepads().item(index);
      setAxes((axes) =>
        gamepad.axes
          .map((v) => (Math.abs(v) > 0.2 ? v : 0))
          .reduce(
            (axes, axe, index) =>
              axes[index] === axe
                ? axes
                : {
                    ...axes,
                    [index]: axe,
                  },
            axes
          )
      );
      setButtons((buttons) =>
        gamepad.buttons.reduce(
          (buttons, button, index) =>
            buttons[index] === button.value
              ? buttons
              : {
                  ...buttons,
                  [index]: button.value,
                },
          buttons
        )
      );
    }
  });

  return { axes, buttons };
};

// https://codesandbox.io/s/minecraft-vkgi6?file=/src/Player.js:0-1996
const SPEED = 5;
const keys = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  ArrowUp: "forward",
  ArrowDown: "backward",
  ArrowLeft: "left",
  ArrowRight: "right",
  Space: "jump",
};
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const speed = new THREE.Vector3();

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });
  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [keys[e.code]]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [keys[e.code]]: false }));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

function Person({ ...props }) {
  const { camera } = useThree();
  const { axes, buttons } = useGamepad();
  const { forward, backward, left, right, jump } = usePlayerControls();
  const [action, setAction] = useState("idle");
  const [group, api] = useSphere(() => ({
    args: 1,
    mass: 1,
    position: [1.2, 5, -1],
    scale: [2, 2, 2],
    ...props,
  }));
  const [{ targetPosition, cameraPosition }, set] = useSpring(() => ({
    targetPosition: [0, 0, 0],
    cameraPosition: [0, 0, 0],
    config: config.molasses,
  }));

  // https://github.com/swift502/Sketchbook/blob/master/build/assets/boxman.glb
  const { scene, animations } = useGLTF(require("./assets/boxman.glb").default);
  // https://codeworkshop.dev/blog/2021-01-20-react-three-fiber-character-animation/
  // https://threejs.org/examples/#webgl_animation_skinning_blending
  const { ref, mixer, names, actions, clips } = useAnimations(animations);

  const velocity = useRef([0, 0, 0]);
  useEffect(
    () => void api.velocity.subscribe((v) => (velocity.current = v)),
    []
  );

  useEffect(() => {
    // https://threejs.org/docs/#api/en/animation/AnimationAction
    const finished = (e) => {
      setAction(e.action.getClip().name.includes("jump") ? "idle" : "idle");
    };
    mixer.addEventListener("finished", finished);
    return () => {
      mixer.removeEventListener("finished", finished);
    };
  }, [mixer]);

  useEffect(() => {
    if (action) {
      const blendDuration = 1;

      actions[action]
        ?.reset()
        .fadeIn(blendDuration)
        .setLoop(
          ["run", "idle"].includes(action) ? THREE.LoopRepeat : THREE.LoopOnce
        )
        .play();

      return () => void actions[action]?.fadeOut(blendDuration);
    }
  }, [actions, action]);

  Object.assign(window, { ref, group });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    ref.current.rotation.y +=
      ((Number(left) - Number(right) - axes[0]) * Math.PI) / 30;

    group.current.getWorldPosition(ref.current.position);
    frontVector.set(0, 0, Number(forward) - Number(backward));
    // sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      // .applyEuler(camera.rotation);
      .applyEuler(ref.current.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }

    if (forward) {
      setAction("run");
    }
    if (backward) {
      setAction("idle");
    }
    if (left) {
      setAction("stand_up_left");
    }
    if (right) {
      setAction("stand_up_right");
    }
  });

  return (
    <group>
      <mesh ref={group}>{/* <sphereGeometry /> */}</mesh>
      <primitive ref={ref} object={scene} />;
    </group>
  );
}

export default function Demo() {
  return (
    <section className={styles.Demo}>
      <Canvas
        shadows
        gl={{ alpha: false }}
        camera={{ fov: 35, position: [5, 10, -15] }}
      >
        <Sky />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <ambientLight intensity={0.01} />
        <hemisphereLight intensity={0.75} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Physics>
          <Debug>
            <Suspense fallback="loading...">
              <Model />
              <Person />
            </Suspense>
          </Debug>
        </Physics>
        <OrbitControls />
      </Canvas>
    </section>
  );
}
