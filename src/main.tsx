import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import './styles/globals.css';

const activeChain = ChainId.Goerli;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <Route>
        <App />
      </Route>
    </ThirdwebProvider>
  </React.StrictMode>
);
