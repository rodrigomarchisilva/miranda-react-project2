import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleCounter = (action) => {
    setCounter(counter + (action === '+' ? 1 : -1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={reverse ? 'App-logo-reverse' : 'App-logo'}
          alt="logo"
        />
        <button onClick={handleClick}>Reverse</button>
        <p>
          Counter is at <code>{counter}</code>
        </p>
        <button onClick={() => handleCounter('+')}>+</button>
        <button onClick={() => handleCounter('-')}>-</button>
      </header>
    </div>
  );
}
