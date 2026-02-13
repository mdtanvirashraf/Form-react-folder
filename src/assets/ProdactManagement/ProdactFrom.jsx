import React, { useState } from 'react';

const ProdactFrom = ({handeAddProduct}) => {
    const [error,setError]=useState()

    const handelOnSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        const newProduct ={ name,email,password }
        // console.log(newProduct)
        
        if(name.length==0){
            setError('give me name')
            return
        }
        else if(email.length==0){
            setError('give me email')
            return
        }
        else if(password.length<8){
            setError('give me 8 digite Password')
            return
        }
        else{
            setError("")
        }

        handeAddProduct(newProduct)

    }


    return (
        <div>
            <h3>Prodactive Frome</h3>
            <form onSubmit={handelOnSubmit}>
                <input type="text" name="name" id="" placeholder='Enteer Your Name'/><br />
                <input type="email" name="email" id="" placeholder='Enteer Your E-mail'/><br />
                <input type="password" name="password" id="" placeholder='Enteer Your Password'/><br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default ProdactFrom;