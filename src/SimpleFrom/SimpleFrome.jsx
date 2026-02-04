import React from 'react';

const SimpleFrome = () => {
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' placeholder='Enter Your Name' />
               <input type="email" name="email" id="" placeholder='E-mail' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrome;