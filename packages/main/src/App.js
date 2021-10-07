import React from 'react';
import App1 from 'app1_remote/App';
import App2 from 'app2_remote/App';

export default function App() {
  return (
    <>
      <main>
        <div id="main_app">
          <h1>Team One Project!</h1>
        </div>
        <App1 />
      </main>
      <App2 />
    </>
  );
};
