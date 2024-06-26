import React from 'react'
//An alert in React is a way to display a message to the user. It can be as simple as using the built-in window.alert() function from JavaScript, which shows a basic pop-up window with a message and an OK button.
function Alert(props){
    return(
        //It is very imp to write props.alert beacuse then only program will execute 
       props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    );
}

export default Alert;