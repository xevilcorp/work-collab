import React, { useState } from 'react';
import PasswordStrengthMeter from 'components/PasswordStrengthMeter';
import Alert from 'components/Alert';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
import './style.css';
import { L, SetLang } from 'functions/Localize';


const firebase = require('firebase/app'); require('firebase/auth');


const { firebaseConfig } = require('../../config');
firebase.initializeApp(firebaseConfig);

export default function Signup({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorAlert, setErrorAlert] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [passwordView, setPasswordView] = useState(L('show'));

    async function togglePasswordView(e) {
        if (passwordType === "text") {
            setPasswordType("password");
            setPasswordView(L('show'));
        }
        else {
            setPasswordType("text");
            setPasswordView(L('hide'));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            setErrorAlert(<Alert message={L(error.message)} type="danger" />);
        });

    }

    async function changeLang(e) {
        SetLang('en-Us');
    }

    return (
        <div className="signup-container">
            <img src={logo} id="logo" alt="Project Together" />
            <form className="signup-form" onSubmit={handleSubmit}>
                {errorAlert}
                <header>
                    <div className="title">{L('create account', 'fc')}</div>
                    <Link to="/login">{L('already got an account?', 'fc')} <span>{L('login', 'fc')}</span>.</Link>
                </header>
                <div className="form-group">
                    <label htmlFor="name">{L('name')}</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{L('email')}</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">{L('password')}</label>
                    <section className="password">
                        <input
                            id="password"
                            type={passwordType}
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <label onClick={togglePasswordView}>{passwordView}</label>
                    </section>

                    <PasswordStrengthMeter className="passwordMeterBar" password={password} />
                </div>
                <div className="terms">
                    <input type="checkbox" name="accept_terms" id="accept_terms" />
                    <label htmlFor="accept_terms">Eu aceito que radiohead tem os melhores albuns do mundo.</label>
                </div>

                <footer>
                    <button type="Submit" >Prosseguir</button>
                </footer>
                <button type="button" onClick={changeLang} >Mudar</button>

            </form>
        </div>
    );
}
