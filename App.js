// This is where all the main code is executed
import './App.css';
import Navbar from './Components.js/Navbar.js';
import TextForm from './Components.js/TextForm.js';
import About from './Components.js/About.js';
import React, { useState } from 'react';
import Alert from './Components.js/Alert.js';
// React Router is a client-side routing library for React that enables developers to build Single Page Applications (SPAs) with smooth navigation and user experience. It does not require a full page reload when users navigate between different components or pages in the application.
// This is my first mini-project of react

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  // This is for navbar background switch mode
  const togglemode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls)//this is making color throughtout the page. Once the color occurs,it cannot be removed since it is "const".So we make function also to remove or change the colors according to users click.
    //Agar navbar color change execute karna hai to upar wale delete kar.
    if (mode === 'light') {
      setMode('dark'); // We cannot directly set state variable using '='
      showalert("Dark mode is enabled", "Success");
      document.title = "Text is amazing with dark background";
    } else {
      setMode('light');
      showalert("Light mode has been enabled", "Success");
      document.title = "Texttiles is amazing with light background";
    }
   
  }

  return (  // From here till the closing bracket, the codes inside are called "jsx".
    // Here, instead of class we will have to write className.
    // Here all codes are from bootstrap which is a framework of css.
    <>
        {/*If defaultProps are not used, then write this */}
      {/* In React, props (short for properties) are a way to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props make it possible for components to be reusable and configurable. */}
      {/* Instead of regularly making changes in html and css file, just use props and also remember to add props in the file which you want to make change */}
      <Navbar title="TextTiles" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <About/>
        <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
