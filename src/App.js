import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FollowerList from './followers/followers';



function App() {
  return (
    <div className="App">
      <Counter />
      <FollowerList />
   
      {/* <header className="App-header">
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
          Learn React a lot
        </a>
      </header> */}
    </div>
  );
}

export default App;
