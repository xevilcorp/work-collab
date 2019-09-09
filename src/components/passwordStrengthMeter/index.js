import React, { useState } from 'react';
import './style.css';

export default function PasswordStrengthMeter(props) {
    const { score } = props;
    const [scoreClass, setScoreClass] = useState('');
    setScoreClass('passwordMeterScore' + score);
    return (
        <div className={scoreClass}></div>
    );
}

