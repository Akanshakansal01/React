import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <App />  // self closing tab
  <div>
    <App />
    <App />
  </div>

);