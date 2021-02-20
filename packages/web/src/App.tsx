import React, { useEffect, useState } from "react";
// import Scene from "./Scene";
// import history from "history/browser";
// import useKeyPress from "./hooks/useKeyPress";

import styles from "./App.module.scss";

const SIZE = {
  X: 10,
  Y: 10,
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [position, setPosition] = useState(() => ({ x: 1, y: 1 }));

  return (
    <section>
      <h1>Three</h1>
    </section>
  );
}
