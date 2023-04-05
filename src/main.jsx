import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/roboto-flex";
import { LanguageProvider } from './context/LanguageContext';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
