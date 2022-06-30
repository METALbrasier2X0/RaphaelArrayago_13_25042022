import React from 'react'
import ReactDOM from 'react-dom/client'
import updateProfile from './../Session/updateProfile.js';

import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken } from './userSession'


/**
 * Code to load user info
 * @param   {token}          string     User Token   
 * @return  {json response}             the answer from the back end            
 */


function GetProfile(Token) {

  const dispatch = useDispatch()

  fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  body:'', 
  headers: { 
      Authorization: Token
    },
 
})



.then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    const element = <> 
    <h1>Welcome back {response.body.firstName} {response.body.lastName}!</h1> 
     <button onClick={(e) => dispatch(updateProfile(Token))} className="edit-button">Edit Name</button>
    </>;
    ReactDOM.createRoot(document.getElementById('userDashboard')).render(element);
  }).catch(error => {
    console.error(error);
  });
}

export default GetProfile