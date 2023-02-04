import { Children, cloneElement } from 'react';
import { useState } from 'react';
import P from 'prop-types';

const style = {
  fontSize: '60px',
};

export const Style = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...style });
    return newChild;
  });
};

export const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return Children.map(children, (child) => {
    if (typeof child.type === 'string') return child;
    const newChild = cloneElement(child, { isOn, toggle });
    return newChild;
  });
};

export const TurnedOn = ({ isOn, children }) => {
  return isOn ? children : null;
};

TurnedOn.propTypes = {
  isOn: P.bool.isRequired,
  children: P.node.isRequired,
};

export const TurnedOff = ({ isOn, children }) => {
  return isOn ? null : children;
};

TurnedOff.propTypes = {
  isOn: P.bool.isRequired,
  children: P.node.isRequired,
};

export const TurnButton = ({ isOn, toggle }) => {
  return <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>;
};

TurnButton.propTypes = {
  isOn: P.bool.isRequired,
  toggle: P.func.isRequired,
};

export const CompoundComponent = () => {
  return (
    <Style>
      <TurnOnOff>
        <TurnedOn>
          <p>Turned On</p>
        </TurnedOn>
        <TurnedOff>
          <p>Turned Off</p>
        </TurnedOff>
        <TurnButton />
      </TurnOnOff>
    </Style>
  );
};
