import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/jquery/dist/jquery.slim.min.js";
import "../node_modules/popper.js/dist/umd/popper.js";            
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
