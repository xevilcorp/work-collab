import React, { useState } from 'react';
import './style.css';
import PasswordStrengthMeter from '../../components/PasswordStrengthMeter';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const firebase = require('firebase/app');

require('firebase/auth');
const { firebaseConfig } = require('../../config');

firebase.initializeApp(firebaseConfig);

export default function Signup({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [passwordView, setPasswordView] = useState('mostrar');

    async function togglePasswordView(e) {
        if (passwordType === "text") {
            setPasswordType("password");
            setPasswordView("mostrar");
        }
        else {
            setPasswordType("text");
            setPasswordView("esconder");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    }

    return (
        <div className="signup-container">
            <img src={logo} id="logo" alt="Project Together" />
            <form className="signup-form" onSubmit={handleSubmit}>
                <header>
                    <div className="title">Criar conta</div>
                    <Link to="/login">Já tem uma conta? <span>Login</span>.</Link>
                </header>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
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
            </form>
        </div>
    );
}

