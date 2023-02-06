import { Children, cloneElement } from 'react';

const style = {
  fontSize: '60px',
};

export const Style = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...style });
    return newChild;
  });
};
