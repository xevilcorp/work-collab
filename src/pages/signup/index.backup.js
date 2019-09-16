
import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css'
const firebase = require('firebase/app');
const firebaseui = require('firebaseui')
require('firebase/auth');

const { firebaseConfig } = require('../../config');

firebase.initializeApp(firebaseConfig);

export default function Signup() {
    const uiConfig = {
        signInSuccessUrl: '/login',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '/terms-of-service',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
            window.location.assign('/privacy-policy');
        }
    };

    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

    return (
        <div>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
        </div>
    );
}

