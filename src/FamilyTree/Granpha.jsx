import React, { createContext, useState } from 'react';
import Father from './Father';
import Uncale from './Uncale';
import './FamilyTree.css'
import Fupu from './Fupu';
export const AssectContex = createContext('');
export const MoneyContex = createContext(0)
const Granpha = () => {
    const daimone = 'Daimon';
    const NewAsset = "Gold";
    const asset = 'A Daimon'
    const [maney,setManey]=useState(0)
    return (
        <div>
            <p>Granpha</p>
            <h3>Total Family Money : {maney}</h3>
            <section className='flex'>

                <MoneyContex value={[maney,setManey]}>
                    <Father daimone={daimone}></Father>
                    <AssectContex.Provider value={NewAsset}>
                        <Uncale asset={asset}></Uncale>
                    </AssectContex.Provider>

                    <Fupu></Fupu>
                </MoneyContex>
            </section>
        </div>
    );
};

export default Granpha;