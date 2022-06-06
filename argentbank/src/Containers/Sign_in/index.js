import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

import getToken from './../Session/userLogin.js';

function handleSubmit(event) {
event.preventDefault();
getToken(event.target.email.value, event.target.password.value);
}
function Sign_in() {

  return (
   <>

   <main id="userDashboard" className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form id="login" onSubmit={e => {handleSubmit(e)}} > 
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