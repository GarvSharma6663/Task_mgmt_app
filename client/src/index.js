import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

function App(){
  return <h1>TaskDone! The Task Manager App</h1>;
}

root.render(<App />);
