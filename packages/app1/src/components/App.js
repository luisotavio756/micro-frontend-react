import React, { useEffect, useState } from 'react'

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
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
    </div>
  )
}
