import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function getToken(Email, Password) {

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
    localStorage.setItem('UserToken', response.body.token);
    console.debug(response);
    window.location.href = "http://localhost:3000/User";
  }).catch(error => {
    console.error(error);
  });
}
export default getToken