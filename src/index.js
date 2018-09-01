import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//renders app in the root div contained in index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
