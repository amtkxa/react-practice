import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloSimpleApp from './HelloSimpleApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloSimpleApp />, document.getElementById('root'));
registerServiceWorker();
