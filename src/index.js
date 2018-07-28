import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tachyons/css/tachyons.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
