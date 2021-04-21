import React, { useState, useEffect } from 'react';
// import { Button } from 'antd'
import { Component } from '@test/common-components'

export function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Component />
          {/* <Button>button1</Button> */}
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}