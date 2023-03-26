import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = ()=> {
    console.log('UpperCase was clicked :  '+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showTheAlert("Text uppercased successfully","success");
}
const handleLoClick = ()=> {
    console.log('LowerCase was clicked :  '+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showTheAlert("Text lowercased successfully","success");
}
const handleClearText = ()=> {
    console.log('Clear Text was clicked :  '+text)
    setText("");
    props.showTheAlert("Text cleared successfully","success");
}
const handleOnChange = (event)=> {
    console.log('On change')
    setText(event.target.value)
}
const handleCopyText =()=>{
    console.log('Copy Text')
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showTheAlert("Text copied successfully","success");
}

const handleExtraSpace = () => {
    console.log('Remove extra spaces')
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showTheAlert("Extra spaces removed successfully","success");
}

const [text, setText] = useState('')
//text="new Text" //wrong way of updating any state variable and every state variable has a hook as useState
//setText("New Text") // Correct way of updating any state variable
 

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading1}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white'
        , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>

    <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading2}</h2>
        <div className="mt-3" >
            <p>{text.charAt(0)==''?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
           {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
           <p>{0.008 * text.split(" ").length} minutes required to read the text</p>
           <h3>Preview</h3>
           <p>{text.length>0?text:'Enter in the textbox above'}</p>
        </div>
    </div>
    </>
  )
}
