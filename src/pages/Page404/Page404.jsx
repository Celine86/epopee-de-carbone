import Img404 from '/404.jpeg';
import './Page404.css';
import { NavLink } from 'react-router-dom';

export function Page404() {

    return (
        <>
            <div className='main404'>
                <img className='img404' src={Img404} />
                <NavLink className='generalBtn' to='/'>Accueil</NavLink>
            </div>
        </>
    )
}