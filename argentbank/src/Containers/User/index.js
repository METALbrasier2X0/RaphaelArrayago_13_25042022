import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

import GetProfile from './../Session/userProfile.js';
import updateProfile from './../Session/updateProfile.js';
import Bloc from "./bloc.js";

var token = localStorage.getItem('UserToken');
var preface ='Bearer' 

var sendin = preface.concat(' ', token);

function User() {
  
  GetProfile(sendin)

if (token == null) {
    window.location.href = "http://localhost:3000/";
}

  return (
   <>

   <main className="main bg-dark User">
      <div id="userDashboard" className="header">
      </div>
      <h2 className="sr-only">Accounts</h2>
        
      <Bloc Name="Argent Bank Checking (x8349)" Current="$2,082.79" State="Available Balance"/>
      <Bloc Name="Argent Bank Savings (x6712)" Current="$10,928.42" State="Available Balance"/>
      <Bloc Name="Argent Bank Credit Card (x8349)" Current="$184.30" State="Current Balance"/>

    </main>

   </>

  );
}

export default User;