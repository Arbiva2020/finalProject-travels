import React, { useState } from "react";

function MyDivText(props) {
    const [text, setText] = useState('This is a test');
    
function OnMouseOver(e){
    setText('');
}
function OnMouseOut (e){
    setText('This is a test')
}
    {

    }
    return (
      <div onMouseOver={OnMouseOver} onMouseOut={OnMouseOut} 
           style={{borderStyle: "solid", borderColor:"black"}}>This is a test{text}</div>
  );
}
export default MyDivText;
