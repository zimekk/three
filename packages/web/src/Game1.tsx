import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { Physics, usePlane, useBox } from "@react-three/cannon";
// import { config, useSpring } from "@react-spring/core";
// import { a } from "@react-spring/three";
import niceColors from "nice-color-palettes";
import useKeyPress from "./hooks/useKeyPress";
import Island from "./components/Island.tsx";
import styles from "./App.module.scss";

function Boy({ parameter, ...props }) {
  const ref = useRef();
  const { scene } = useGLTF("boy.gltf");

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
  }, [pressed.ArrowUp]);
  useEffect(() => {
    if (pressed.ArrowDown) {
      ref.current.position.x += Math.sin(ref.current.rotation.y);
      ref.current.position.z += Math.cos(ref.current.rotation.y);
    }
  }, [pressed.ArrowDown]);
  useEffect(() => {
    if (pressed.ArrowLeft) {
      ref.current.rotation.y += Math.PI / 4;
    }
  }, [pressed.ArrowLeft]);
  useEffect(() => {
    if (pressed.ArrowRight) {
      ref.current.rotation.y -= Math.PI / 4;
    }
  }, [pressed.ArrowRight]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // if (ref.current) {
    //   ref.current.rotation.y = Math.sin(t + 2 / 1) + 3;
    // }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

export default function Demo() {
  // const ref = useRef(null);
  const [parameter, setParameter] = useState({ x: 4, y: 0, z: -3 });

  // useEffect(() => {
  //   let frame = undefined;
  //   function renderLoop() {
  //     frame = requestAnimationFrame(renderLoop);
  //   }
  //   renderLoop();
  //   return () => cancelAnimationFrame(frame);
  // }, []);

  const colors = niceColors[1];

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
          <Island />
          <Boy position={[0, 0.3, 0]} scale={[0.1, 0.1, 0.1]} />
          {/* <Boy
            position={[2, 0, -1]}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Car
            position={Object.values(parameter)}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Dog
            position={[2, 0, 0]}
            rotation={[0, 3.5, 0]}
            scale={[0.1, 0.1, 0.1]}
            parameter={parameter}
          />
          <Girl position={[-0.8, 0, -1]} rotation={[0, 3.5, 0]} /> */}
          {/* <Shoe position={[-1, 2, 0]} /> */}
        </Suspense>
        <OrbitControls />
        {/* <color attach="background" args={["lightblue"]} /> */}
        {/* <hemisphereLight intensity={0.35} /> */}
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
