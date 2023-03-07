import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App'

ReactDOM.render
(   <Router>
    <GoogleOAuthProvider clientId='855183889745-vol3gsdtarata5hullgm0s370klfe3am.apps.googleusercontent.com'><App/></GoogleOAuthProvider>
    </Router>,
    document.getElementById('root')
);