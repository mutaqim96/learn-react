import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://robohash.org/mutaqim?200x200'/>
            <div>
                <h2>Qim sem</h2>
                <p>qim@getnada.com</p>
            </div>
        </div>
    );
}

export default Card;