import React from 'react';
import ReactDOM from 'react-dom';
import { generatePath } from "react-router";
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";

function Bloc(props) {

  return (
   <>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.Name}</h3>
          <p className="account-amount">{props.Current}</p>
          <p className="account-amount-description">{props.State}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button  className="transaction-button">View transactions</button>
        </div>
      </section>


   </>

  );
}

export default Bloc;