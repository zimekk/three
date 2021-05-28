import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { DoubleSide, RepeatWrapping, sRGBEncoding } from "three";
import {
  Loader,
  OrbitControls,
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import styles from "./App.module.scss";

// https://techblog.geekyants.com/recreating-real-world-terrain-with-react-threejs-and-webgl-shaders-1
// https://codesandbox.io/s/three-js-uluru-texturemap-forked-lhimi
const vertexShader = `
// Uniforms are data that are shared between shaders
// The contain data that are uniform across the entire frame.
// The heightmap and scaling constant for each point are uniforms in this respect.

// A uniform to contain the heightmap image
uniform sampler2D bumpTexture;
// A uniform to contain the scaling constant
uniform float bumpScale;

// Varyings are variables whose values are decided in the vertext shader
// But whose values are then needed in the fragment shader

// A variable to store the height of the point
varying float vAmount;
// The UV mapping coordinates of a vertex
varying vec2 vUV;

void main()
{
    // The "coordinates" in UV mapping representation
    vUV = uv;

    // The heightmap data at those coordinates
    vec4 bumpData = texture2D(bumpTexture, uv);

    // height map is grayscale, so it doesn't matter if you use r, g, or b.
    vAmount = bumpData.r;

    // move the position along the normal
    vec3 newPosition = position + normal * bumpScale * vAmount;

    // Compute the position of the vertex using a standard formula
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragmentShader = `
// A uniform fot the terrain texture image
uniform sampler2D terrainTexture;

// Get the varyings from the vertex shader
varying vec2 vUV;
// vAmount isn't really used, but could be if necessary
varying float vAmount;

void main()
{
    // Get the color of the fragment from the texture map
    // at that coordinate in the UV mapping
    gl_FragColor = texture2D(terrainTexture, vUV);
}
`;

export default function () {
  return (
    <section className={styles.Demo}>
      <Canvas>
        <Suspense fallback={null}>
          <group>
            <Terrain />
          </group>
          <ambientLight />
        </Suspense>
        <PerspectiveCamera
          position={[0.5, 0.5, 0.5]}
          near={0.01}
          far={1000}
          makeDefault
        />
        <OrbitControls screenSpacePanning={false} />
      </Canvas>
      <Loader />
    </section>
  );
}

function Terrain() {
  // Load the heightmap image
  const heightMap = useTexture(require("./assets/uluru-heightmap.png").default);
  // Apply some properties to ensure it renders correctly
  heightMap.encoding = sRGBEncoding;
  heightMap.wrapS = RepeatWrapping;
  heightMap.wrapT = RepeatWrapping;
  heightMap.anisotropy = 16;

  // Load the texture map
  const textureMap = useTexture(require("./assets/texturemap1024.png").default);
  // Apply some properties to ensure it renders correctly
  textureMap.encoding = sRGBEncoding;
  textureMap.wrapS = RepeatWrapping;
  textureMap.wrapT = RepeatWrapping;
  textureMap.anisotropy = 16;

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1 / 1024, 1 / 1024, 1 / 1024]}
    >
      <planeBufferGeometry args={[1024, 1024, 256, 256]} />
      <shaderMaterial
        uniforms={{
          // Feed the heightmap
          bumpTexture: { value: heightMap },
          // Feed the scaling constant for the heightmap
          bumpScale: { value: 50 },
          // Feed the texture map
          terrainTexture: { value: textureMap },
        }}
        // Feed the shaders as strings
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
    </mesh>
  );
}
