import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken } from '../Session/userSession'

/**
 * Code to Log in a user 
 * @return  {React element}             Containers that shows the log in form          
 */

function Sign_in() {

  const dispatch = useDispatch()

function GetToken(event, Email, Password) {

event.preventDefault();

const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'your-token'
});

return fetch('http://localhost:3001/api/v1/user/login', {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({ "email": Email, "password": Password })
})

.then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    dispatch(storeToken(response.body.token));
    console.debug(response);
    window.location.href = "http://localhost:3000/profile";
  }).catch(error => {
    console.error(error);
  });
}

  return (
   <>

   <main id="userDashboard" className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id="login" onSubmit={e => {GetToken(e, e.target.email.value, e.target.password.value);}} > 
          <div className="input-wrapper">
            <label htmlFor="username">Username</label><input name="email"  type="text" id="username"></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label><input name="password" type="password" id="password"></input>
          </div>
         
           <div className="input-remember">
            <input type="checkbox" id="remember-me"></input><label htmlFor="remember-me">Remember me</label>
          </div>


          <button className="sign-in-button">Sign In</button> 
    
        </form>
      </section>
    </main>

   </>

  );
}

export default Sign_in;