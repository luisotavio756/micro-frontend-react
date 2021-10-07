import React from 'react';
import { useEffect, useState } from 'react'

export default function App1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div id="app2_remote">
      <h1>Counter from Team 3</h1>
      <h3>{count}</h3>
    </div>
  )
}
