import React from 'react';
import Useinportfild from './Useinportfild';

const HookFrom = () => {
    const [name,nameOnChange]=Useinportfild()
    const [password,passwordOnChange]=Useinportfild();
    const [email,emailOnchange]=Useinportfild();
    const handelSubmit =(e)=>{
        e.preventDefault();
        console.log("su: ",name, email, password)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>

                <h1>HookFrom</h1>
                <input type="text" defaultValue={name} onChange={nameOnChange} />
                <br />
                <input type="email" name="email" defaultValue={email} onChange={emailOnchange} id="" /> 
                <br />
                <input type="password" name="password" onChange={passwordOnChange} defaultValue={password} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;