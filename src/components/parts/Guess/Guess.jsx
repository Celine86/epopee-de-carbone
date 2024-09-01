import './Guess.css';
import { useState } from 'react';

export function Guess () {
    const [inputValue, setInputValue] = useState('');
    const [Result, setResult] = useState('');
    const [Message, setMessage] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase().trim());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue === 'ici') {
            setMessage(true);
            setResult('OK');
            setTimeout(() => {
                setMessage(false);
            }, 3000);
        } else {
            setMessage(true);
            setResult('NOK');
            setTimeout(() => {
                setMessage(false);
            }, 3000);
        }
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>Carbone se trouve à </label>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    //placeholder='Où se trouve Carbone ?'
                />
            </form>
            {Message && <p>{Result}</p>}
        </>
    );
};