import { TurnOnOff } from './TurnOnOff';
// import { Style } from './Style';
import { TurnedOn } from './TurnedOn';
import { TurnedOff } from './TurnedOff';
import { ToggleButton } from './ToggleButton';

export const CompoundComponent = () => {
  return (
    // <Style>
    <TurnOnOff>
      <TurnedOn>
        <p>Turned On</p>
      </TurnedOn>
      <TurnedOff>
        <p>Turned Off</p>
      </TurnedOff>
      <ToggleButton />
    </TurnOnOff>
    // </Style>
  );
};
