import React, { useState } from "react";

const Counter = () => {
    var [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(counter => {
            return counter + 1;
        });
    };
    const decrease = () => {
        if(counter>0){
            setCounter(counter => {
                return counter - 1;
            })
        }
    };
    return(
        <div className="project">
            <p id="counterNum">{counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;
