import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './styles.css'; // Your custom styles if needed
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@500;700&display=swap" rel="stylesheet"></link>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);