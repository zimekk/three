import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  earth: lazy(() => import("./Earth")),
  landscape: lazy(() => import("./Landscape")),
  "game-1": lazy(() => import("./Game1")),
  "game-2": lazy(() => import("./Minecraft")),
  "game-3": lazy(() => import("./RaycastVehicle")),
  "game-4": lazy(() => import("./Aircraft")),
  "demo-1": lazy(() => import("./Demo1")),
  "demo-2": lazy(() => import("./Demo2")),
  "demo-3": lazy(() => import("./Demo3")),
  "demo-4": lazy(() => import("./FloatingLaptop")),
  "demo-5": lazy(() => import("./Alley")),
  "demo-6": lazy(() => import("./Water")),
  "demo-7": lazy(() => import("./Airport")),
  gamepad: lazy(() => import("./Gamepad")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

function App() {
  const ref = useRef(null);
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  useEffect(() => {
    let frame = undefined;
    let lastCalledTime = Date.now();
    let fps = 0;
    function renderLoop() {
      let delta = (Date.now() - lastCalledTime) / 1000;
      lastCalledTime = Date.now();
      fps = 1 / delta;
      ref.current.innerText = `fps ${fps.toFixed()}`;
      frame = requestAnimationFrame(renderLoop);
    }
    renderLoop();
    return () => cancelAnimationFrame(frame);
  }, []);

  const Demo = PAGES[page] || null;

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Three
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}]
      </h1>
      <div ref={ref} className={styles.Fps} />
      <Suspense fallback={<Spinner />}>
        <Demo />
      </Suspense>
    </section>
  );
}

export default hot(App);
