import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App'
import googleLogin from './sneha/googleLogin';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="741017505698-4h94mgscj6acm22q74p8tvu2kr62ln9b.apps.googleusercontent.com">
        <React.StrictMode>
            <googleLogin />
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>)
;

//741017505698-4h94mgscj6acm22q74p8tvu2kr62ln9b.apps.googleusercontent.com

//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