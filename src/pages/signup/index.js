import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import './style.css';
import PasswordStrengthMeter from '../../components/passwordStrengthMeter';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';


export default function Signup({ history }) {
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [passwordView, setPasswordView] = useState('mostrar');
    const [score, setScore] = useState('');

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
    async function updatePassword(e) {
        setPassword(e.target.value);
        const result = zxcvbn(password);
        setScore(result.score);
    }

    return (
        <div className="signup-container">
            <img src={logo} id="logo" alt="Project Together" />
            <form className="signup-form">
                <header>
                    <div className="title">
                        Criar conta
                    </div>
                    <Link to="/login">
                        Já tem uma conta? <span>Login</span>.
                    </Link>
                </header>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Digite o nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" name="username" id="username" placeholder="Digite um nome de acesso" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <section className="password">
                        <input type={passwordType} name="password" id="password" value={password} onChange={updatePassword} placeholder="Digite uma senha" />
                        <label onClick={togglePasswordView}>{passwordView}</label>
                    </section>

                    <PasswordStrengthMeter score={score} />
                </div>
                <div className="terms">
                    <input type="checkbox" name="accept_terms" id="accept_terms" />
                    <label htmlFor="accept_terms">Eu aceito que radiohead tem os melhores albuns do mundo.</label>
                </div>

                <footer>
                    <button type="Submit">Prosseguir</button>
                </footer>
            </form>
        </div>
    );
}

