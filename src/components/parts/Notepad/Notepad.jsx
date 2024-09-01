import './Notepad.css';
import { useState } from 'react';
import Eraser from '/Erase.png';

export function Notepad() {

    const localNotes = localStorage.getItem("notes") === null ? "Prends des Notes !" : localStorage.getItem("notes");
    const [notes, setNotes] = useState(localNotes);
  
    const handleChange = e => {
      localStorage.setItem("notes", e.target.value);
      setNotes(e.target.value);
    };

    const deleteNotes = e => {
        localStorage.removeItem("notes");
        setNotes('Prends des Notes !');
    };

    return (
        <>
            <textarea className='blocNotes' value={notes} onChange={handleChange} cols="60" rows="8" />
            <img className='eraser' onClick={deleteNotes} src={Eraser} />
        </>
    )
}