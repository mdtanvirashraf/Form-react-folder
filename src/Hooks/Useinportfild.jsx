import React, { useState } from 'react';

const Useinportfild = (defaultValue) => {
    const [fieldValue,setFieldValue]=useState(defaultValue);
    const handelfieldOnchange=(e)=>{
        setFieldValue(e.target.value)
}
return[fieldValue,handelfieldOnchange]
};

export default Useinportfild;