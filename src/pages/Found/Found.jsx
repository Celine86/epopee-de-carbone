import './Found.css';
import CarboneFound from '/Found.jpg'

export function Found() {
    return (
        <div className='found'>
            <h1 className='foundTitle'>TROUVE !</h1>
            <img className='foundImg' src={CarboneFound} />
        </div>
    )
}