import { useContext } from 'react';
import { TurnOnOffContext } from '../../contexts';
import P from 'prop-types';

export const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

TurnedOff.propTypes = {
  children: P.node.isRequired,
};
