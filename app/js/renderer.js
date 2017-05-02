
/*
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
*/

//const ReactDOM = require('react-dom');
//const React = require('react');

import React from 'react';
import ReactDOM from 'react-dom';

//window.React = React;

import App from '../components/app.jsx';

/*
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
*/

window.onload = function(){
  ReactDOM.render(<App />, document.getElementById('app'));
}
