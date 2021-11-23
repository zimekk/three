import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import noise, { perlin3 } from "./noise";
import styles from "./styles.module.scss";

// https://github.com/Claeb101/procedural-mesh-animation/blob/main/app/src/Anim.js
function MeshAnim({
  position,
  rotation,
  grid: { width, height, sep },
  colorOfXYZT,
  zOfXYT,
  anim: { init, update },
}) {
  let t = init; // time

  // vertex buffer
  let { positions, colors, normals } = useMemo(() => {
    let positions = [],
      colors = [],
      normals = [];

    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        let x = sep * (xi - (width - 1) / 2);
        let y = sep * (yi - (height - 1) / 2);
        let z = zOfXYT(x, y, t);
        positions.push(x, y, z);

        let color = colorOfXYZT(x, y, z, t);
        colors.push(color.r, color.g, color.b);
        normals.push(0, 0, 1);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [width, height, sep, zOfXYT, colorOfXYZT, t]);

  // index buffer
  let indices = useMemo(() => {
    let indices = [];
    let i = 0;
    for (let yi = 0; yi < height - 1; yi++) {
      for (let xi = 0; xi < width - 1; xi++) {
        indices.push(i, i + 1, i + width + 1); // bottom right tri
        indices.push(i + width + 1, i + width, i); // top left tri
        i++;
      }
      i++;
    }

    return new Uint16Array(indices);
  }, [width, height]);

  // animation
  let posRef = useRef(),
    colorRef = useRef();
  useFrame(() => {
    t = update(t);

    const positions = posRef.current.array,
      colors = colorRef.current.array;

    let i = 0;
    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        positions[i + 2] = zOfXYT(positions[i], positions[i + 1], t);
        let c = colorOfXYZT(
          positions[i],
          positions[i + 1],
          positions[i + 2],
          t
        );
        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;
        i += 3;
      }
    }

    posRef.current.needsUpdate = true;
    colorRef.current.needsUpdate = true;
  });

  return (
    <mesh position={position} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute
          ref={posRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          ref={colorRef}
          attachObject={["attributes", "color"]}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "normal"]}
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
        />
      </bufferGeometry>
      <meshStandardMaterial
        vertexColors
        side={THREE.DoubleSide}
        wireframe={false}
      />
    </mesh>
  );
}

function Anim() {
  const seed = Math.floor(Math.random() * 2 ** 16);
  noise.seed(seed);

  const sampleNoise = (x, y, z) => {
    let scale = 1 / 8;
    let octaves = 20;
    let persistence = 0.6;
    let lacunarity = 2;

    let amp = 1;
    let freq = 1;

    let value = 0;
    for (let i = 0; i < octaves; i++) {
      value += amp * perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistence;
      freq *= lacunarity;
    }

    return value;
  };

  const zOfXYT = (x, y, t) => {
    return sampleNoise(x, y, t);
  };

  const colorOfXYZT = (x, y, z, t) => {
    return {
      r: z,
      g: z / 5,
      b: Math.sqrt(x ** 2 + y ** 2) / 75,
    };
  };

  return (
    <MeshAnim
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      grid={{
        width: 100,
        height: 100,
        sep: 0.2,
      }}
      zOfXYT={zOfXYT}
      colorOfXYZT={colorOfXYZT}
      anim={{
        init: 0,
        update: (t) => t + 0.002,
      }}
    />
  );
}

export default function Section() {
  return (
    <section className={styles.Section}>
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        <ambientLight />
        <Stars
          radius={300}
          depth={60}
          count={1000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <Anim />
      </Canvas>
    </section>
  );
}
