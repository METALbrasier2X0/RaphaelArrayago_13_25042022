import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector, useDispatch } from 'react-redux'

function updateProfile(Token) {

   let FirstName = prompt("Please enter your first name:", "FirstName");
   let LastName = prompt("Please enter your last name:", "LastName");

   if (FirstName == null || FirstName == "") {
    
  } else {

     const requestOptions = {
        method: 'PUT',
        headers: { Authorization: Token,
        'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: FirstName,
      lastName: LastName, })
    };


  fetch('http://localhost:3001/api/v1/user/profile', requestOptions)

.then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
     window.location.reload();
  }).catch(error => {
    console.error(error);
  });

  }
}
export default updateProfile