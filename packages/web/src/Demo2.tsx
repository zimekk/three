import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { a } from "@react-spring/three";
import niceColors from "nice-color-palettes";
import styles from "./App.module.scss";

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
      <shadowMaterial attach="material" color="#171717" />
    </mesh>
  );
}

function Cube({ position = [0, 5, 0], ...props }) {
  const { gl, camera } = useThree();

  const [ref] = useBox(() => ({
    mass: 1,
    rotation: [0.4, 0.2, 0.5],
    position,
    ...props,
  }));

  return (
    <a.mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </a.mesh>
  );
}

export default function Demo() {
  const [parameter, setParameter] = useState({ x: 4, y: 0, z: -3 });

  useEffect(() => {
    let frame = undefined;
    function renderLoop() {
      frame = requestAnimationFrame(renderLoop);
    }
    renderLoop();
    return () => cancelAnimationFrame(frame);
  }, []);

  const colors = niceColors[1];

  return (
    <section className={styles.Demo}>
      <Canvas
        shadowMap
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 5], fov: 50 }}
      >
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
        <Physics>
          <Plane />
          <Cube />
          <Cube position={[0, 10, -2]} />
          <Cube position={Object.values(parameter)} />
        </Physics>
      </Canvas>
    </section>
  );
}
