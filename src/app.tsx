import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

// Create root element
const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');

// Add it to document body
document.body.appendChild(rootElement);

// Render main router
ReactDOM.render(<AppRouter />, rootElement);
