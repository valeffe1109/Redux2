import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store'
import * as serviceWorker from './serviceWorker';
import MainPage from './Components/MainPage';
import Home from './Components/Home';





ReactDOM.render(
    <Provider store={configureStore()}>
        <Home/>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
