import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [totalMemory, setTotalMemory] = useState(0);

  useEffect(() => {
    // Get total memory in bytes and convert to GB
    const memoryInGB = Math.round(process.memoryUsage().heapTotal / 1024 / 1024 / 1024 * 100) / 100;
    setTotalMemory(memoryInGB);
    
    // Log memory information to console
    console.log('Total Memory Available:', memoryInGB, 'GB');
    console.log('Detailed Memory Usage:', process.memoryUsage());
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
