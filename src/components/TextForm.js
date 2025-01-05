import React from 'react'
import Button from './Button'
import {useState} from 'react'

export default function TextForm(props) {

  const [text,setText] = useState('');
  
  const handleUpperCaseBtn = ()=>{
    if(text===''){
      props.showAlert("Enter Text to convert to UpperCase!","danger");
    }
    else{
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase!","success");
    }
  }
  const handleLowerCaseBtn = ()=>{
    if(text===''){
      props.showAlert("Enter Text to convert to LowerCase!","danger");
    }
    else{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success");
    }

  }
  const handleRemoveSpaceBtn=()=>{
    setText(text.replaceAll(' ',''));
    props.showAlert("Removed all spaces!","success");

  }
  const handleCapitalizeBtn=()=>{
    if(text===''){
      props.showAlert("Enter Text to capitalize!","danger");
    }
    else{
      let newText="";
      newText+=text.charAt(0).toUpperCase();
      for(let i=1; i<text.length; i++){
        if(text.at(i-1)===' '&& text.at[i]!==' '){
          newText+=text.charAt(i).toUpperCase();
        }
        else{
          newText+=text.charAt(i).toLowerCase();
        }
      }
      setText(newText);
      
      props.showAlert("Capitalized all characters!","success");
    }
    
  }
  const handleClearBtn = () => {
    setText('');
    
    props.showAlert("Cleared Text","info");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='Eneter text here..'></textarea>
        </div>
        <Button btnType="primary" btnText="UPPUER CASE" onClick={handleUpperCaseBtn} />
        <Button btnType="warning" btnText="LOWER CASE" onClick={handleLowerCaseBtn} />
        <Button btnType="danger" btnText="REMOVE SPACE" onClick={handleRemoveSpaceBtn} />
        <Button btnType="dark" btnText="CAPITALIZE" onClick={handleCapitalizeBtn} />
        <Button btnType="success" btnText="CLEAR" onClick={handleClearBtn}/>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p><b>{(text.match(/\b\w+\b/g) || []).length}</b> word and <b>{text.length}</b> characters</p>
      <p><b>{0.008*(text.match(/\b\w+\b/g) || []).length}</b> Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
