import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import logo from './../img/argentBankLogo.png';

/**
 * Code to show the header
 * @param   {props}           props     Props containing data from parent component
 * @return  {React element}             Containers that shows the Header of the App          
 */


function Header(props) {
  return (
  <>

  <Navbar className="main-nav">
    <Navbar.Brand className="main-nav-logo" href="/"><img
        src={logo}
        className="main-nav-logo-image"
      />
      </Navbar.Brand>

      <Nav.Link className="main-nav-item" href="/Sign_in"><i className="fa fa-user-circle"></i>Sign In</Nav.Link>

  </Navbar>
</>
  ); 
}
export default Header;
