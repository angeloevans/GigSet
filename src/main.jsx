import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import App from './App';
import './index.css';  // Import your global styles

// Wrap the entire app in BrowserRouter here to enable routing throughout the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);