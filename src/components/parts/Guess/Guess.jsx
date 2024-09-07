import './Guess.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Eraser from '/Erase.png';
import Check from '/Check.png';

export function Guess () {
    const [inputValue, setInputValue] = useState('');
    const [Result, setResult] = useState('');
    const [ClassResult, setClassResult] = useState('');
    const [Message, setMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const deleteNotes = e => {
        setInputValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue === "Phare du Paon") {
            navigate('/found');
        } else {
            setMessage(true);
            setResult("Carbone n'est pas ici");
            setClassResult('notfound');
            setTimeout(() => {
                setMessage(false);
            }, 5000);
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
                />
                <img className='iconGuess' onClick={handleSubmit} src={Check} />
                <img className='iconGuess' onClick={deleteNotes} src={Eraser} />
            </form>
            {Message && <p className={ClassResult}>{Result}</p>}
        </>
    );
};