import React, { useState } from "react";

const ShowPassword = () => {
    const [show, setShow] = useState(false);
    const showPass = () => {
        if(show===false){
            setShow(true);
        }else{
            setShow(false);
        }
    };
    return <div>
        <input type={show ? 'text' : 'password'}></input>
        <button className="btn btn-primary" onClick={showPass}>Show</button>
    </div>
}

export default ShowPassword;