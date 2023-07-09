import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("Upper Case was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <div className = {`bg-${props.mode} text-${props.textMode} p-3 border border-${props.textMode}`}>
            <div>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <div className='mb-3'>
                        <textarea class = {`form-control bg-${props.mode} text-${props.textMode} p-3 border border-${props.textMode}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} no. of words and {text.length} characters</p>
                <p>Time to read the text is {0.008 * text.split(" ").length}</p>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
