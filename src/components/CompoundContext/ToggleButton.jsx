import { useContext } from 'react';
import { TurnOnOffContext } from '../../contexts';

export const ToggleButton = () => {
  const { isOn, toggle } = useContext(TurnOnOffContext);
  return <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>;
};
