import React from 'react';

const FromAcrose = () => {
     const handelclickFrom =(FromeData)=>{
            console.log(FromeData.get('name'))
            console.log(FromeData.get('email'))
        }
    return (
       
        <div>
            <form action={handelclickFrom}>
                <input type="text" name='name' placeholder='Enter Your Name'/>
                <br />
                <input type="email" name="email" placeholder='E-mail' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FromAcrose;