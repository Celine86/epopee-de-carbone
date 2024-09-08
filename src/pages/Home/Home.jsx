import './Home.css';
import Carbone from '/Carbone_Young.jpeg';
import { NavLink } from 'react-router-dom';

export function Home() {
    return (
        <div className='home'>
            <h1 className='homeTitle'>L'épopée de Carbone</h1>
            <div className='homePresentation'>
                <img className='homeImg' src={Carbone} />
                <div>
                    <p className='homeP'>
                        Carbone est un petit chat aventureux.<br /> 
                        Il a pris une grande décision !<br /> 
                        Partir à l'aventure pour voir la mer !<br />
                        Prêt à suivre les péripéties de Carbone et le retrouver ?<br />
                    </p>
                    <p className='homeNavlink'><NavLink className='generalNavlink' to='/board'>Oui, je suis prêt !</NavLink></p>
                </div>
            </div>
        </div>
    )
}