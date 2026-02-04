import React, { useState } from 'react';



const ContorlFrom = () => {

    const [password, setPassword] = useState()

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log("submit")
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }
    const onchangePassword=(e)=>console.log(e.target.value)

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' value={password} onChange={onchangePassword}
                    required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContorlFrom;