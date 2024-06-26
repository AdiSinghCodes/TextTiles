import PropTypes from 'prop-types'; //Very imp to import this function while u are doing Proptypes.

import React, {useState} from 'react'; //In React, a hook is a special function that allows you to use state and other React features in functional components, rather than just in class components.
//Here "usestate" which is a built-in hook in react is used as a "state".
//useState: This hook allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update it.
export default function TextForm(props){ //Here also we will make use of props
    const handleUpClick = () => { //In react we cannot update state normally. We will to make a different function
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); //Here we can update our state using setText
        props.showalert(" Converted into upper case", "Success");
    }

    //yaha hum "onchangeevent" ko handle kar rahe hai and is called "Event handling"
    const handleOnChange = (event) => { //This is similar to eventListener
        console.log("On change");
        setText(event.target.value); //taki user type bhi kar paye,we are linking value(text) in event    
    }
  
    const handleLowClick = (event) => {
        console.log("Convert into lowercase" + text);
       let lower = text.toLowerCase();
       setText(lower);
       props.showalert(" Converted into lower case","Success");
    }

    const handlecopyClick = (event) => {
        console.log("The text is copied");
        let textcopy = document.getElementById("mybox");
       textcopy.select();
        navigator.clipboard.writeText(textcopy.value); //This line is very imp
        props.showalert(" Copy to clipboard","Success");
    }

    const [text, setText] = useState('Enter text here2'); //Here the cuurent state is "text" and updated is "setText"
    return(
        <>
        <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handleUpClick}>Convert into Uppercase</button> {/*Humne mx-2 isiliye add kiya taki dono buttons ke bich mai gap aa jaye */}
<button className="btn btn-primary mx-2"  disabled={text.length===0} onClick={handleLowClick}>Convert into Lowercase</button> {/*Disabled isiliye use kiya kyuki jab kuch text likha na ho, to saare buttons disable honge*/}
<button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handlecopyClick}>Copy Text</button>
</div>
<div className="container my-3">
    <h1>Your text summary</h1>
    {/*Here down we are using '\s' which is 'space' and '/' to count the no. of words properly and since in each line new word is written, it will count that also with the help of '/' operator*/}
   <b><p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p></b> {/*Use of bold tag is done here. yaha empty string ko bhi count kar raha hai isiliye "filter" method ka use kiya hai*/}
    <p>{0.008 * text.split(" ").length} minutes will require to read.</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
    );
}

TextForm.propTypes = { //Agar Proptype yaha set nhi kiya then to it's ok
    heading : PropTypes.string.isRequired
}

//Bina page ko load kiye hum text ko uppercase mai convert kar sakte hai
//In React, a "state" is a built-in object that is used to contain data or information about the component.
//Event handling in React is the process of responding to user interactions such as clicks, scrolls, keyboard inputs, and other events that occur in the browser.