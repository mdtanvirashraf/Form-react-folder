import React, { useRef } from 'react';

const UncontrolFrom = () => {
    const emailRafe=useRef('')

    const PasswordRaf=useRef('')

    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(emailRafe.current.value);
        console.log(PasswordRaf.current.value);

    }

    
    return (
        <div>
            <h1>UncontrolFrom</h1>
            <form onSubmit={handelSubmit}>
                <input type="email" name="email" ref={emailRafe} /><br />
            <input type="password" name="password" ref={PasswordRaf}  /><br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolFrom;