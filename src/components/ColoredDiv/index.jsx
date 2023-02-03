import { useMediaQuery } from '../../hooks/useMediaQuery';

export const ColoredDiv = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(min-width: 768px)');
  const medium = useMediaQuery('(min-width: 576px)');
  const small = useMediaQuery('(min-width: 0px)');
  const background = huge
    ? 'green'
    : big
    ? 'blue'
    : medium
    ? 'yellow'
    : small
    ? 'orange'
    : 'red';
  return <div style={{ fontSize: '60px', background }}>Colored Div</div>;
};
