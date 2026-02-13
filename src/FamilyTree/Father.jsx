import React from 'react';
import Me from './Me';
import Sister from './Sister';

const Father = ({daimone}) => {
    return (
        <div>
            <p>Father</p>
            <section className='flex'>
                <Me daimone={daimone}></Me>
            <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;