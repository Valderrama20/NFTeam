import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import './styles/globals.css';

const activeChain = ChainId.Polygon;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
