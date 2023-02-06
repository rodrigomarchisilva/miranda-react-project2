import { TurnOnOffContext } from './context';
import { useState } from 'react';
import P from 'prop-types';

export const TurnOnOffProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return (
    <TurnOnOffContext.Provider value={{ isOn, toggle }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

TurnOnOffProvider.propTypes = {
  children: P.node.isRequired,
};
