import logo from './athena.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Emily's first React App.
        </p>
        <a
          className="App-link"
          href="https://emilyannemoses.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my portfolio!
        </a>
      </header>
    </div>
  );
}

export default App;
