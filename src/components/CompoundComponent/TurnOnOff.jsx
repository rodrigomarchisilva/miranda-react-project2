import { Children, cloneElement } from 'react';
import { useState } from 'react';

export const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return Children.map(children, (child) =>
    typeof child.type === 'string'
      ? child
      : cloneElement(child, { isOn, toggle }),
  );
};
