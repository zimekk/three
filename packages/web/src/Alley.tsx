import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { config, useSpring } from "@react-spring/core";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Stars,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import {
  Debug,
  Physics,
  usePlane,
  useBox,
  useSphere,
  useCylinder,
} from "@react-three/cannon";
import niceColors from "nice-color-palettes";
import grass from "./Minecraft/assets/grass.jpg";
import styles from "./App.module.scss";

const colors = niceColors[0];

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

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
const rotateVector = new THREE.Vector3(0, 1, 0);

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
  const { forward, backward, left, right, jump } = usePlayerControls();
  const [action, setAction] = useState("idle");
  const [group, api] = useSphere(() => ({
    mass: 1,
    position: [1.2, 5, -1],
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

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // camera.lookAt(group.current?.position)
    camera.lookAt(...targetPosition.get());
    camera.position.set(...cameraPosition.get());
    if (group.current) {
      set.start({
        targetPosition: (({ x, y, z }, h = 1) => [x, y + h, z])(
          group.current?.position
        ),
        cameraPosition: (({ x, y, z }, { y: rotation }, d = -5, h = 3) => [
          x + Math.sin(rotation) * d,
          y + h,
          z + Math.cos(rotation) * d,
        ])(group.current?.position, ref.current?.rotation),
      });
    }

    ref.current.position.copy(group.current.position);
    ref.current.rotation.y += ((Number(left) - Number(right)) * Math.PI) / 30;
    frontVector.set(0, 0, Number(forward) - Number(backward));
    // sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(ref.current.rotation);
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
      <mesh ref={group} />
      <primitive ref={ref} object={scene} />;
    </group>
  );
}

// https://medium.com/@kfarr/experimenting-with-pbr-textures-and-a-frame-26c5a034b7b
// https://codesandbox.io/s/minecraft-vkgi6?file=/src/Ground.js:0-614
function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  // https://maxrohde.com/2019/10/28/textures-and-lighting-with-react-and-three-js/
  const texture = useLoader(THREE.TextureLoader, grass);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(240, 240);

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} color="green" />
    </mesh>
  );
}

function Street(props) {
  const [ref] = useBox(() => ({ ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[10, 0.1, 9]} />
      <meshStandardMaterial color={0x252929} />
    </mesh>
  );
}

function Flagstone({ height: h, ...props }) {
  const [ref] = useBox(() => ({ ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[0.98, h, 0.98]} />
      <meshStandardMaterial color={0x828282} />
    </mesh>
  );
}

function Kerbstone({ height: h, ...props }) {
  const [ref] = useBox(() => ({ ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[1.98, h, 0.18]} />
      <meshStandardMaterial color={0x828282} />
    </mesh>
  );
}

function Sidewalk({ ...props }) {
  const height = 0.2;

  return (
    <group {...props}>
      {[...Array(10)]
        .reduce(
          (m, k, i) => m.concat([...Array(2)].map((k, j) => [i - 4.5, j + 1])),
          []
        )
        .map(([x, z], key) => (
          <Flagstone key={key} height={height} position={[x, height / 2, z]} />
        ))}
      {[...Array(5)]
        .map((k, i) => [i * 2 - 4, 0.4])
        .map(([x, z], key) => (
          <Kerbstone key={key} height={height} position={[x, height / 2, z]} />
        ))}
    </group>
  );
}

function Building({ ...props }) {
  const height = random(4, 8);
  const [ref] = useBox(() => ({ ...props }));

  return (
    <group position={[0, height / 2, 0]}>
      <mesh ref={ref} receiveShadow>
        <boxGeometry args={[2.48, height, 1.98]} />
        <meshStandardMaterial
          color={colors[Math.round(random(0, colors.length - 1))]}
        />
      </mesh>
    </group>
  );
}

function Buildings({ ...props }) {
  return (
    <group {...props}>
      {[...Array(4)]
        .map((k, i) => [i * 2.5 - 3.75, 3.5])
        .map(([x, z], key) => (
          <Building key={key} position={[x, 0, z]} />
        ))}
    </group>
  );
}

// https://www.youtube.com/watch?v=F75DVNJyzuw
// https://owenbmcc.github.io/mmp310/project3-2/
// https://github.com/owenbmcc/mmp310/blob/master/project3-2/scene.js
function Trunk({ height: h, ...props }) {
  const [ref] = useCylinder(() => ({ position: [0, h / 2, 0], ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <cylinderGeometry args={[0.1, 0.2, h, 5]} />
      <meshStandardMaterial
        color={colors[Math.round(random(0, colors.length - 1))]}
      />
    </mesh>
  );
}

function Leave({ color, height: h, ...props }) {
  const x = random(-0.5, 0.5);
  const y = h + random(-0.5, 0.25);
  const z = random(-0.5, 0.5);
  const [ref] = useSphere(() => ({
    position: [x, y, z],
    rotation: [random(0, Math.PI * 0.5), random(0, Math.PI * 0.5), 0],
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <icosahedronGeometry args={[random(h / 12, h / 4)]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Tree({ ...props }) {
  const height = random(4, 6);
  const color = colors[Math.round(random(0, colors.length - 1))];

  return (
    <group {...props}>
      <Trunk height={height} />
      {[...Array(5)].map((i, key) => (
        <Leave key={key} color={color} height={height} />
      ))}
    </group>
  );
}

function Trees({ ...props }) {
  return (
    <group {...props}>
      {[...Array(5)]
        .map((k, i) => [i * 2 - random(3.8, 4.2), 0.75])
        .map(([x, z], key) => (
          <Tree key={key} position={[x, 0, z]} />
        ))}
    </group>
  );
}

function Lamp({ ...props }) {
  const h = 3;
  return (
    <group {...props}>
      <pointLight castShadow intensity={0.3} position={[0, h, 0]} />
      <mesh position={[0, h, 0]}>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial
          {...{
            color: 0xfcfdd1,
            metalness: 0.75,
            roughness: 0,
            emissive: new THREE.Color(0xfff8cf),
            emissiveIntensity: 1,
            transparent: true,
            opacity: 0.95,
          }}
        />
      </mesh>
      <mesh position={[0, h / 2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, h, 5]} />
        <meshStandardMaterial color={0x404040} />
      </mesh>
    </group>
  );
}

function Lamps({ ...props }) {
  return (
    <group {...props}>
      {[...Array(4)]
        .map((k, i) => [i * 2 - 3, 0.75])
        .map(([x, z], key) => (
          <Lamp key={key} position={[x, 0, z]} />
        ))}
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
        <Physics gravity={[0, -30, 0]}>
          <Debug scale={1.1} color="black">
            <Suspense fallback="loading...">
              <Ground />
              <Street />
              <Sidewalk />
              <Buildings />
              <Trees />
              <Lamps />
              <Person />
            </Suspense>
          </Debug>
        </Physics>
        <OrbitControls />
      </Canvas>
    </section>
  );
}
