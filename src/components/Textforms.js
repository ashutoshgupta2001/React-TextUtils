import React, { useState } from 'react'

export default function Textforms(props) {
    const handleUpClick = () => {
        console.log("Uppercase clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleDownClick = () => {
        console.log("Lowercase clicked")
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleCleartext = () => {
        let newtext = ''
        setText(newtext)
    }
    const handleCopytext = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const removeExtraSpace =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the Text here")
    return (<>
        <div>
            <h3 style={{color:`${props.mode==='light'?'black':'white'}`}}>{props.heading}</h3>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:`${props.mode==='light'?'white':'grey'}`,color:`${props.mode==='light'?'black':'white'}`}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-warning mx-2" onClick={handleDownClick}> Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleCleartext}> Clear Text</button>
            <button className="btn btn-success mx-2" onClick={handleCopytext}> Copy Text</button>
        </div>
        <div className='container my-3' style={{color:`${props.mode==='light'?'black':'white'}`}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
    )
}
