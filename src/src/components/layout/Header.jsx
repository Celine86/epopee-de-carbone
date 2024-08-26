import './Header.css';
import catGreen from '/cat-green.png';
import catYellow from '/cat-yellow.png';
import catPawGreen from '/bigCatPaw-green.png';
import catPawYellow from '/bigCatPaw-yellow.png';

export function Header() {
    return (
        <>
        <div id='modal'></div>
        <header>
            <div className='headerElmt'>
                <img className='website' src={catPawGreen}
                    onMouseOver={e => e.currentTarget.src = catPawYellow}
                    onMouseOut={e => e.currentTarget.src = catPawGreen}
                />
            </div>
            <div className='headerElmt containerMytitle'>
                <h1 className='mytitle'>Be A Cat</h1>
            </div>
            <div className='headerElmt containerNav'>
                <a target='_blank' href='https://lilineslab.fr'>
                    <img className='mainLogo' src={catGreen}
                        onMouseOver={e => e.currentTarget.src = catYellow}
                        onMouseOut={e => e.currentTarget.src = catGreen}
                    />
                </a>
            </div>
        </header>
        </>
    )
}