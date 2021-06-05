import React, { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { config, useSpring } from "@react-spring/core";
import niceColors from "nice-color-palettes";
import styles from "./App.module.scss";

const colors = niceColors[0];

function useKeyPress(target, event) {
  useEffect(() => {
    const downHandler = ({ key }) => target.indexOf(key) !== -1 && event(true);
    const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false);
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
}

function useControls() {
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    brake: false,
    reset: false,
  });
  useKeyPress(["ArrowUp", "w"], (pressed) => (keys.current.forward = pressed));
  useKeyPress(
    ["ArrowDown", "s"],
    (pressed) => (keys.current.backward = pressed)
  );
  useKeyPress(["ArrowLeft", "a"], (pressed) => (keys.current.left = pressed));
  useKeyPress(["ArrowRight", "d"], (pressed) => (keys.current.right = pressed));
  useKeyPress([" ", "Shift"], (pressed) => (keys.current.brake = pressed));
  useKeyPress(["r"], (pressed) => (keys.current.reset = pressed));
  return keys;
}

function Ground({ position = [0, -1, 0], ...props }) {
  const [ref] = usePlane(() => ({
    material: { friction: 0.5 },
    rotation: [-Math.PI / 2, 0, 0],
    position,
    ...props,
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshLambertMaterial attach="material" color={colors[1]} />
    </mesh>
  );
}

function Cube({ position = [0, 5, 0], ...props }) {
  const { camera } = useThree();
  const controls = useControls();
  const [open, setOpen] = useState(false);
  const [{ pos }, set] = useSpring(() => ({
    pos: [0, 0, 0],
    config: config.molasses,
  }));

  const [ref, api] = useBox(() => ({
    mass: 1,
    material: { friction: 0.002 },
    rotation: [0.4, 0.2, 0.5],
    position,
    ...props,
  }));

  useFrame(({ clock: { elapsedTime } }) => {
    if (
      controls.current.forward ||
      controls.current.backward ||
      controls.current.left ||
      controls.current.right ||
      controls.current.brake
    ) {
      api.applyForce(
        [
          controls.current.left ? -5 : controls.current.right ? 5 : 0,
          controls.current.brake ? 15 : 0,
          controls.current.forward ? -5 : controls.current.backward ? 5 : 0,
        ],
        [0, 0, 0]
      );
    }
    set.start({
      pos: (({ x, y, z }) => [x, y, z])(ref.current.position),
    });
    camera.lookAt((([x, y, z]) => new Vector3(x, y, z))(pos.get()));
  });

  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onClick={(e) => (e.stopPropagation(), setOpen(!open))}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color={open ? colors[3] : colors[4]}
      />
    </mesh>
  );
}

export default function Demo() {
  return (
    <section className={styles.Demo}>
      <Canvas gl={{ alpha: false }} camera={{ position: [-1, 2, 5], fov: 50 }}>
        <OrbitControls />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Physics>
          <Ground />
          <Cube />
        </Physics>
      </Canvas>
    </section>
  );
}
