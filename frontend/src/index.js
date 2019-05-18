import 'office-ui-fabric-react/dist/css/fabric.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/_icons'
import './styles/_theme'


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();