import './BreizhMap.css';
import { BreizhMap } from '../../components/parts/Map/Map.jsx';
import { Notepad } from '../../components/parts/Notepad/Notepad.jsx';
import { Guess } from '../../components/parts/Guess/Guess.jsx';
import QuestionMark from '/questionmark-green.png';
import BlueMarker from '/BlueMarker.svg';
import GreenMarker from '/GreenMarker.svg';
import YellowMarker from '/YellowMarker.svg';
import RedMarker from '/RedMarker.svg';

export function Board() {

    return (
        <>
            <div className='mapBzhHeader'>
                <h1>Retrouve Carbone !</h1>
                <div className='mapBzhTooltip'>
                    <img className='mapBzhQuestionMark ' src={QuestionMark}></img>
                    <span class='mapBzhTooltiptext'>Comment jouer ?</span>
                </div>
            </div>
            <div className='mapBzh'><BreizhMap /></div>
            <div className='mapBzhPlayOptions'>
                <div className='mapBzhMarkers'>
                    <img className='mapBzhMarker' src ={BlueMarker} /><p>Infos</p>
                    <img className='mapBzhMarker' src ={GreenMarker} /><p>Endroit sûr</p>
                    <img className='mapBzhMarker' src ={YellowMarker} /><p>Nourriture</p>
                    <img className='mapBzhMarker' src ={RedMarker} /><p>Danger</p>
                </div>
                <div className='mapBzhPlayOptions notepad'>
                    <Guess />
                    <p>Prends des notes !</p>
                    <Notepad />
                </div>
            </div>
        </>
    )
}