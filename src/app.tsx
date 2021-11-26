import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import AppRouter from './routers/AppRouter';

// Create root element
const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');

// Add it to document body
document.body.appendChild(rootElement);

// Initialize GA
ReactGA.initialize('G-9EZJ86EBH9');

// Render main router
ReactDOM.render(<AppRouter />, rootElement);
