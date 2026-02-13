import React from 'react';
import SpacealJone from './SpacealJone';

const Me = ({daimone}) => {
    return (
        <div>
            <p>Me</p>
            <SpacealJone name='Lisa' daimone={daimone}></SpacealJone>
        </div>
    );
};

export default Me;