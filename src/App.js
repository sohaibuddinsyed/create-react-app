import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <h1>Environment Variables</h1>
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
          {JSON.stringify({
            NODE_ENV: process.env.NODE_ENV,
            ...Object.fromEntries(
              Object.entries(process.env)
                .filter(([key]) => key.startsWith('AWS'))
            )
          }, null, 2)}
        </pre>
    </div>
  );
}

export default App;
