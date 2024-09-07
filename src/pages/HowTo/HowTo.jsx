import Tuto from '/Tuto.png';
import './HowTo.css';

export function HowTo() {
    return (
        <div className='howto'>
            <h1>Comment jouer</h1>
            <p>
                Pour commencer clique sur le point que tu souhaites voir (1). Une carte d'info s'ouvre (2). Regarde où tu te trouves (3) et prends des notes (4).<br />
                Tente ta chance en entrant le nom du lieu (5) et clique pour savoir si c'est juste (6).<br />
                Tourne ton téléphone pour mieux voir l'image !
            </p>
            <img className='howtoImg' src={Tuto} />
        </div>
    )
}