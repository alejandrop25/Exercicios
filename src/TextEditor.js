import React, { useState } from "react";
import $ from 'jquery';
import './fonts.css';

const TextEditor = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [textColor, setTextColor] = useState('')
    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        if(selectedValue==="timesNewRoman"){
            $("#pg").removeClass('arial-class');
            $("#pg").addClass('times-roman-class');
        }else{
            $("#pg").removeClass('times-roman-class');
            $("#pg").addClass('arial-class');
        }
    }
    const handleColor = (e) => {
        setTextColor(e.target.value);
    }
    const increase = () => {
        setFontSize(fontSize + 2);
    }
    const decrease = () => {
        if(fontSize>6){
            setFontSize(fontSize - 2);
        }
    }
    return <div>
        <div className="row">
            <select style={{width: "15em", marginLeft: "13.5em"}} className="form-select" onChange={handleChange}>
                <option value="timesNewRoman">Times New Roman</option>
                <option value="arial">Arial</option>
            </select>
            <select style={{width: "15em"}} className="form-select" onChange={handleColor}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select>
        </div>
        <p>Fonte: {fontSize}px</p>
        <button className="btn btn-secondary" onClick={increase}>+</button>
        <button className="btn btn-secondary" onClick={decrease}>-</button>
        <p style={{fontSize: fontSize, color: textColor}} id="pg">Tempoor occaecat cillum laboris pariatur id nulla nisi nulla labore elit fugiat ad ad. Exercitation velit labore in ex. Ex do sint commodo veniam. Reprehenderit nulla non ad labore amet consequat est magna aliquip reprehenderit labore reprehenderit mollit. Officia enim ex adipisicing deserunt velit aliquip. Lorem do nostrud id voluptate minim elit magna qui consectetur fugiat dolor laborum culpa nisi.</p>
    </div>;
}

export default TextEditor;