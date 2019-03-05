import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_base.scss';
import Layouts from './layouts/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layouts />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();