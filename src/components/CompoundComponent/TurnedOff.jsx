import P from 'prop-types';

export const TurnedOff = ({ children, isOn }) => (isOn ? null : children);

TurnedOff.propTypes = {
  children: P.node.isRequired,
  isOn: P.bool.isRequired,
};
