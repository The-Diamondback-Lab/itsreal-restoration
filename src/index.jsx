import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './jsx/App';
import Highcharts from 'highcharts';

window.Highcharts = Highcharts;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
