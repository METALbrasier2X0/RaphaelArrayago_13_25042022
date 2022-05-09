import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

/**
 * Code to show the Footer
 * @param   {props}           props     Props containing data from parent component
 * @return  {React element}             Containers that shows the Footer of the App          
 */


function Footer(props) {
  return (
  <>
    <footer className="footer"> <p className="footer-text">Copyright 2020 Argent Bank</p> </footer>
  </>
  ); 
}
export default Footer;
