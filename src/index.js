import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from 'react-router-dom';
import KamerProvider from './context/KamersContext';


ReactDOM.render(
    <KamerProvider>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </KamerProvider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

