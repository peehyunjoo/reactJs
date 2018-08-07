import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popper  from 'popper.js';
import Tether from 'tether';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
