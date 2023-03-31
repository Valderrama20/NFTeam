import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import './styles/globals.css';

const activeChain = ChainId.Polygon;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      authConfig={{
        // Set this to your domain to prevent phishing attacks
        domain: 'example.com',
        // The URL of your Auth API
        authUrl: '/api/auth',
      }}
      activeChain={activeChain}
    >
      <Route>
        <App />
      </Route>
    </ThirdwebProvider>
  </React.StrictMode>
);
