import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken, selectToken } from './Session/userSession'

import logo from './../img/argentBankLogo.png';

/**
 * Code to show the header
 * @param   {props}           props     Props containing data from parent component
 * @return  {React element}             Containers that shows the Header of the App          
 */



function Header(props) {
   var token = useSelector(selectToken);
  const dispatch = useDispatch()

function Logout() {

dispatch(clearToken())

}

function Logoutdiv(status) {
  const [visibility,set_visibility] = useState(status)
  const dispatch = useDispatch()

  return (
    <>
     {visibility&& <Nav.Link  onClick={() => Logout()} className="main-nav-item" href="/Sign_in" ><i className="fa fa-sign-out"></i>Sign out</Nav.Link> }
    </>
  );
}


    var status = false;
    if (token != null) {
    status = true
}

  return (
  <>

  <Navbar className="main-nav">
    <Navbar.Brand className="main-nav-logo" href="/"><img
        src={logo}
        className="main-nav-logo-image"
      />
      </Navbar.Brand>
      <div>
      {Logoutdiv(status)}
      <Nav.Link className="main-nav-item" href="/Sign_in"><i className="fa fa-user-circle"></i>Sign In</Nav.Link>
      </div>
  </Navbar>
</>
  ); 
}
export default Header;
