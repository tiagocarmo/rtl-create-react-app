import './style.css';

function App({
  message = 'default',
  customFunction
}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
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
        <p>{message}</p>
        <button type="button" disabled>Desabilitado</button>
        <button type="button" onClick={() => customFunction()}>Habilitado</button>
      </header>
    </div>
  );
}

export default App;
