import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'office-ui-fabric-react/dist/css/fabric.css';
// import './index.css'

import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { initializeIcons } from '@uifabric/icons';
import { initializeFileTypeIcons } from '@uifabric/file-type-icons';

initializeFileTypeIcons(/* optional base url */);
initializeIcons();

loadTheme({
    palette: {
        themePrimary: '#f47b20',
        themeLighterAlt: '#fffaf6',
        themeLighter: '#fde9da',
        themeLight: '#fcd7ba',
        themeTertiary: '#f9af77',
        themeSecondary: '#f68b3a',
        themeDarkAlt: '#dc701d',
        themeDark: '#ba5e18',
        themeDarker: '#894612',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#d0d0d0',
        neutralSecondary: '#a2a2a2',
        neutralPrimaryAlt: '#767676',
        neutralPrimary: '#646464',
        neutralDark: '#4c4c4c',
        black: '#383838',
        white: '#ffffff',
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();