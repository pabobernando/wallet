import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GrazProvider } from "graz";
import { cosmoshub, osmosis, celestia } from "graz/chains";
import { ChainInfo } from "@keplr-wallet/types";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GrazProvider
      grazOptions={{
        chains: [cosmoshub,osmosis,celestia],
      }}
    >
      <App />
    </GrazProvider>
  </React.StrictMode>,
);
