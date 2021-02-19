import React from 'react';
import ReactDOM from 'react-dom';
import './Style/style.css';
import Provider from "react-redux/lib/components/Provider";
import store from './Redux/Redux-store'
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
