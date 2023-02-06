import P from 'prop-types';

export const ToggleButton = ({ isOn, toggle }) => {
  return <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>;
};

ToggleButton.propTypes = {
  isOn: P.bool.isRequired,
  toggle: P.func.isRequired,
};
