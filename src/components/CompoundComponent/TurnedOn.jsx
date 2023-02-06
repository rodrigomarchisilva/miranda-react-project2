import P from 'prop-types';

export const TurnedOn = ({ children, isOn }) => (isOn ? children : null);

TurnedOn.propTypes = {
  children: P.node.isRequired,
  isOn: P.bool.isRequired,
};
