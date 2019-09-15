import React from 'react';
import zxcvbn from 'zxcvbn';
import './style.css';

export default function PasswordStrengthMeter(props) {
    const { password, style, className } = props;
    var scoreClass = '';
    var score = '';
    if (password === "") {
        scoreClass = `passwordMeterScore ${className}`;
    }
    else {
        score = zxcvbn(password).score;
        scoreClass = 'passwordMeterScore' + score + " " + className;
    }
    return (
        <div className={scoreClass} style={style}></div>
    );
}

