import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>ermm why isn't this working</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
