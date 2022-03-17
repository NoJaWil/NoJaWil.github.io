import heart from './heart.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="heart-logo" alt="logo" />
        <p>
          Hey cutie!
        </p>
        <a
          className="hugs-link"
          href="https://tenor.com/view/milk-and-mocha-bear-couple-line-hug-cant-breathe-gif-12687187"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </header>
    </div>
  );
}

export default App;
