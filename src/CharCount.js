import React, { useState } from "react";

const CharCount = () => {
    const [userInput, setUserInput] = useState('');
    const inputHandler = (e) => {
        setUserInput(e.target.value);
    }
    return <div>
        <textarea name="text" onChange={inputHandler} maxLength={500} style={{fontSize: 20}} rows="4" cols="50"></textarea>
        <p>Characters left: {(500 - userInput.length)}</p>
    </div>
}

export default CharCount;