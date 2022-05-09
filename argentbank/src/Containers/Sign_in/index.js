import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

function Sign_in() {

  return (
   <>

   <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="/user"> 
          <div className="input-wrapper">
            <label for="username">Username</label><input type="text" id="username"></input>
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label><input type="password" id="password"></input>
          </div>
         
           <div className="input-remember">
            <input type="checkbox" id="remember-me"></input><label for="remember-me">Remember me</label>
          </div>


          <button className="sign-in-button">Sign In</button> 
    
        </form>
      </section>
    </main>

   </>

  );
}

export default Sign_in;