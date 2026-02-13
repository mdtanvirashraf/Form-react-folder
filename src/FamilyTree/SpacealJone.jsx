import React, { useContext } from 'react';
import { AssectContex, MoneyContex } from './Granpha';
const SpacealJone = ({name,daimone}) => {
    const [maney,setManey]=useContext(MoneyContex)
    const NewAsset=useContext(AssectContex)
    const handelAddmoney=()=>{
        setManey(maney+1000)
    }
    
    return (
        <div>
            <p>{name}</p>
            <p>{daimone}</p>
            <p>NewAsset:{NewAsset}</p>
            {/* <button onClick={handelAddmoney}>Add 1000 tk</button> */}
            
            {
                
                name==="Lisa" && <button onClick={handelAddmoney}>Add 1000 tk</button>
            }
        </div>
    );
};

export default SpacealJone;