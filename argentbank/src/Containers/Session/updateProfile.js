import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector, useDispatch } from 'react-redux'

function updateProfile(Token) {


  const requestOptions = {
        method: 'PUT',
        headers: { Authorization: Token,
        'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: "Steve",
      lastName: "Rogers", })
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
  }).catch(error => {
    console.error(error);
  });
}
export default updateProfile