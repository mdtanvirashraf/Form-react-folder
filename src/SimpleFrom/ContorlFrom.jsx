import React, { useState } from 'react';

const ContorlFrom = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        

        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
        } else {
            setError("");
        }
        console.log(name, email, password);

        // //sate sate eror blbe

        // if (pass.length < 6) {
        //     setError("Password must be 6 characters or longer");
        // } else {
        //     setError("");
        // }
    };

    
        

    
    const onchangePassword = (e) => {
        console.log(e.target.value)
        const pass = e.target.value;
        setPassword(pass);
    }

    const oneChangeName=(e)=>{
        const name=e.target.value
        console.log(name);
        setName(name)

    }

    const handelEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    return(
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='Name' defaultValue={name} 
                onChange={oneChangeName} />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handelEmailChange}
                    defaultValue={email}
                    required
                />
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onchangePassword}
                    required
                />
                <br />

                <input type="submit" value="Submit" />

            </form>

            <h3 style={{ color: 'red' }}>{error}</h3>
        </div>
    );
};

export default ContorlFrom;
