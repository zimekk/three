import React, { Suspense, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Debug, Physics, usePlane, useSphere } from "@react-three/cannon";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { config, useSpring } from "@react-spring/core";
import useKeyPress from "./hooks/useKeyPress";
import Island from "./components/Island.tsx";
import styles from "./App.module.scss";

const calcPos = ({ position: { x, y, z } }, h = 1) => [x, y + h, z];

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[15, 15]} />
      <shadowMaterial attach="material" color="#171717" />
    </mesh>
  );
}

const SPEED = 5;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();
const speed = new Vector3();
const vector = new Vector3();

function Boy({ parameter, ...props }) {
  const [rotation, setRotation] = useState(0);
  const obj = useRef();
  const [ref, api] = useSphere(() => ({
    args: 1,
    mass: 1,
    position: [0, 3, 0],
    isKinematic: true,
  }));

  const calcCam = ({ position: { x, y, z } }, d = 3, h = 3) => [
    x + Math.sin(rotation) * d,
    y + h,
    z + Math.cos(rotation) * d,
  ];

  Object.assign(window, { ref, api });
  const { gl, camera } = useThree();
  const { scene } = useGLTF("boy.gltf");
  const [{ pos, cam }, set] = useSpring(() => ({
    pos: [0, 0, 0],
    cam: [0, 0, 0],
    config: config.slow,
  }));

  const pressed = {
    ArrowUp: useKeyPress("ArrowUp"),
    ArrowDown: useKeyPress("ArrowDown"),
    ArrowLeft: useKeyPress("ArrowLeft"),
    ArrowRight: useKeyPress("ArrowRight"),
    Space: useKeyPress(" "),
  };
  useEffect(() => {
    set.start({
      pos: calcPos(ref.current),
      cam: calcCam(ref.current),
    });
  }, []);
  // useEffect(() => {
  //   if (pressed.ArrowUp) {
  //     const {
  //       position: { x, y, z },
  //     } = ref.current;
  //     api.velocity.set(Math.sin(rotation), 0, Math.cos(rotation));
  //     // api.position.set(x - Math.sin(rotation), y, z - Math.cos(rotation));
  //   }
  //   set.start({
  //     pos: calcPos(ref.current),
  //     cam: calcCam(ref.current),
  //   });
  // }, [pressed.ArrowUp]);
  // useEffect(() => {
  //   if (pressed.ArrowDown) {
  //     const {
  //       position: { x, y, z },
  //     } = ref.current;
  //     api.position.set(x + Math.sin(rotation), y, z + Math.cos(rotation));
  //   }
  //   set.start({
  //     pos: calcPos(ref.current),
  //     cam: calcCam(ref.current),
  //   });
  // }, [pressed.ArrowDown]);
  useEffect(() => {
    if (pressed.ArrowLeft) {
      obj.current.rotation.y += (1 * Math.PI) / 4;
    }
  }, [pressed.ArrowLeft]);
  useEffect(() => {
    if (pressed.ArrowRight) {
      obj.current.rotation.y += (-1 * Math.PI) / 4;
    }
  }, [pressed.ArrowRight]);
  // useEffect(() => {
  //   if (pressed.Space) {
  //     api.velocity.set(0, 4, 0);
  //   }
  // }, [pressed.Space]);
  Object.assign(window, { vector, camera, cam });
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.getWorldPosition(vector);
    camera.lookAt(vector);
    // const [x, y, z] = pos.get();
    // camera.lookAt(new Vector3(x, 2, z));
    // camera.lookAt(new Vector3(x, 2, z));
    camera.position.set(...cam.get());
  });

  const velocity = useRef([0, 0, 0]);

  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);
  useFrame((state) => {
    const jump = pressed.Space;
    // ref.current.getWorldPosition(camera.position);
    ref.current.getWorldPosition(obj.current.position);
    frontVector.set(0, 0, Number(pressed.ArrowDown) - Number(pressed.ArrowUp));
    // sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      // .applyEuler(camera.rotation);
      .applyEuler(obj.current.rotation);
    speed.fromArray(velocity.current);
    // axe.current.children[0].rotation.x = THREE.MathUtils.lerp(
    //   axe.current.children[0].rotation.x,
    //   Math.sin((speed.length() > 1) * state.clock.elapsedTime * 10) / 6,
    //   0.1
    // );
    // axe.current.rotation.copy(camera.rotation);
    // axe.current.position
    //   .copy(camera.position)
    //   .add(camera.getWorldDirection(rotation).multiplyScalar(1));
    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }

    ref.current.getWorldPosition(vector);
    set.start({
      pos: calcPos({ position: vector }),
      cam: calcCam({ position: vector }),
    });
  });

  return (
    <group>
      <mesh ref={ref}></mesh>
      <primitive ref={obj} object={scene} {...props} />
    </group>
  );
}

export default function Demo() {
  const [parameter, setParameter] = useState({ x: 4, y: 0, z: -3 });

  return (
    <section className={styles.Demo}>
      <div className={styles.Range}>
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.x}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, x: e.target.value }))
          }
        />{" "}
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.y}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, y: e.target.value }))
          }
        />{" "}
        <input
          type="range"
          min="-10"
          max="10"
          value={parameter.z}
          onChange={(e) =>
            setParameter((parameter) => ({ ...parameter, z: e.target.value }))
          }
        />{" "}
        {JSON.stringify(parameter)}
      </div>
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 5], fov: 50 }}
      >
        <Suspense fallback="loading...">
          <Island scale={1} />
          <Physics>
            <Debug>
              <Plane />
              <Boy position={[0, 1, 0]} scale={[0.1, 0.1, 0.1]} />
            </Debug>
          </Physics>
        </Suspense>
        <OrbitControls />
        <color attach="background" args={["lightblue"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
      </Canvas>
    </section>
  );
}
