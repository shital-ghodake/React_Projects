import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase ();
        setText(newText)
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase ();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText=' ';
        setText(newText )
    }
    const handleOnChange = (event) =>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //setText("new text")

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        &nbsp;
        <button className='btn btn-primary' onClick={handleLoClick}>Convert to Lowercase</button>
        &nbsp;
        <button className='btn btn-primary' onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
