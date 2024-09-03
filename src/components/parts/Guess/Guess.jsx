import './Guess.css';
import { useState } from 'react';
import Eraser from '/Erase.png';
import Check from '/Check.png';

export function Guess () {
    const [inputValue, setInputValue] = useState('');
    const [Result, setResult] = useState('');
    const [Message, setMessage] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const deleteNotes = e => {
        setInputValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue === "Toull ar Oas") {
            setMessage(true);
            setResult("Carbone est ici !");
            setTimeout(() => {
                setMessage(false);
            }, 15000);
        } else {
            setMessage(true);
            setResult("Carbone n'est pas ici");
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
                <img className='iconGuess' onClick={handleSubmit} src={Check} />
                <img className='iconGuess' onClick={deleteNotes} src={Eraser} />
            </form>
            {Message && <p className='result'>{Result}</p>}
        </>
    );
};