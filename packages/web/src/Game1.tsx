import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { config, useSpring } from "@react-spring/core";
// import { a } from "@react-spring/three";
import useKeyPress from "./hooks/useKeyPress";
import Island from "./components/Island.tsx";
import styles from "./App.module.scss";

const calcPos = ({ position: { x, y, z } }, h = 1) => [x, y + h, z];

const calcCam = ({ position: { x, y, z }, rotation }, d = 3, h = 3) => [
  x + Math.sin(rotation.y) * d,
  y + h,
  z + Math.cos(rotation.y) * d,
];

function Boy({ parameter, ...props }) {
  const ref = useRef();
  const { gl, camera } = useThree();
  const { scene } = useGLTF("boy.gltf");
  const [{ pos, cam }, set] = useSpring(() => ({
    pos: [0, 0, 0],
    cam: [0, 0, 0],
    config: config.molasses,
  }));

  const pressed = {
    ArrowUp: useKeyPress("ArrowUp"),
    ArrowDown: useKeyPress("ArrowDown"),
    ArrowLeft: useKeyPress("ArrowLeft"),
    ArrowRight: useKeyPress("ArrowRight"),
  };
  useEffect(() => {
    if (pressed.ArrowUp) {
      ref.current.position.x -= Math.sin(ref.current.rotation.y);
      ref.current.position.z -= Math.cos(ref.current.rotation.y);
    }
    set({
      pos: calcPos(ref.current),
      cam: calcCam(ref.current),
    });
  }, [pressed.ArrowUp]);
  useEffect(() => {
    if (pressed.ArrowDown) {
      ref.current.position.x += Math.sin(ref.current.rotation.y);
      ref.current.position.z += Math.cos(ref.current.rotation.y);
    }
    set({
      pos: calcPos(ref.current),
      cam: calcCam(ref.current),
    });
  }, [pressed.ArrowDown]);
  useEffect(() => {
    if (pressed.ArrowLeft) {
      ref.current.rotation.y += Math.PI / 4;
    }
    set({
      pos: calcPos(ref.current),
      cam: calcCam(ref.current),
    });
  }, [pressed.ArrowLeft]);
  useEffect(() => {
    if (pressed.ArrowRight) {
      ref.current.rotation.y -= Math.PI / 4;
    }
    set({
      pos: calcPos(ref.current),
      cam: calcCam(ref.current),
    });
  }, [pressed.ArrowRight]);

  useFrame((state) => {
    // const t = state.clock.getElapsedTime();
    camera.lookAt(new THREE.Vector3(...pos.get()));
    (([x, y, z]) => Object.assign(camera.position, { x, y, z }))(cam.get());
  });

  return <primitive ref={ref} object={scene} {...props} />;
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
          <Island scale={2} />
          <Boy position={[0, 0.6, 0]} scale={[0.1, 0.1, 0.1]} />
        </Suspense>
        <OrbitControls />
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
