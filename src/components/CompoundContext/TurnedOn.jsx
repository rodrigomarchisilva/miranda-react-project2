import { useContext } from 'react';
import { TurnOnOffContext } from '../../contexts';
import P from 'prop-types';

export const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

TurnedOn.propTypes = {
  children: P.node.isRequired,
};
