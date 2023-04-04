import React from 'react';
import './card.css';

const lenceImages = require.context('../../../public/img', true);
console.log(lenceImages(`./blanco/blanco1.jpg`))
export const Card = () => {
    return (
        <div className='card'>
            <img src={lenceImages(`./blanco/blanco1.jpg`)} alt='imagen' />
            <div className='card-body'>
                <h4 className='card-title'>my title</h4>
                <p className='card-text'>Officia anim in ex excepteur aute ullamco.Velit est pariatur amet laboris ad dolore. Cupidatat elit et ex ea nisi irure officia anim est magna est. Lorem enim nulla occaecat minim aute culpa nostrud eiusmod consequat non qui.
                </p>
            </div>
        </div>
    )
}
export default Card;
