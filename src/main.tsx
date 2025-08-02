import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PresentationApp from './components/PresentationApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PresentationApp />
  </StrictMode>
);
