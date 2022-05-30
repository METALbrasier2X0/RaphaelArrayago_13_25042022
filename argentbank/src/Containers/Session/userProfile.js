import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function getProfile(Token) {


return fetch('http://localhost:3001/api/v1/user/profile', {
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
       return response.body;
  }).catch(error => {
    console.error(error);
  });
}
export default getProfile