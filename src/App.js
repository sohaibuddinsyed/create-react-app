import logo from './logo.svg';
import './App.css';
import v8 from 'v8';
import { useState, useEffect } from 'react';

function App() {
  const [totalMemory, setTotalMemory] = useState(0);

  
  useEffect(() => {
  // For browser environments
  if (navigator.deviceMemory) {
    const memory = navigator.deviceMemory;
    setTotalMemory(memory);
    console.log('Total Device Memory:', memory, 'GB');
  }
    console.log(`Heap stats: ${v8.getHeapStatistics()}`);
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Total Memory Available: {totalMemory} GB
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
