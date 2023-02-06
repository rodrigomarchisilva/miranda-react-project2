import { ToggleButton } from './ToggleButton';
import { TurnedOff } from './TurnedOff';
import { TurnedOn } from './TurnedOn';
import { TurnOnOffProvider } from '../../contexts';
import { Style } from './Style';

export const CompoundContext = () => {
  return (
    <Style>
      <TurnOnOffProvider>
        <TurnedOn>
          <p>Turned On</p>
        </TurnedOn>
        <TurnedOff>
          <p>Turned Off</p>
        </TurnedOff>
        <ToggleButton />
      </TurnOnOffProvider>
    </Style>
  );
};
