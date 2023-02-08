import logo from '../../svgs/logo.svg';
import { useState } from 'react';

export const StateComponent = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleCounter = (action) => {
    setCounter(counter + (action === '+' ? 1 : -1));
  };

  return (
    <div>
      <header>
        <img
          src={logo}
          className={reverse ? 'logo-reverse' : 'logo'}
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
};
