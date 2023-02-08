import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global_style.css';
import { Home, Training } from './templates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Home />
    <Training />
  </StrictMode>,
);
