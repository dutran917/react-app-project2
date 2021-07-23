import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import jp from '../japan.png'
import eng from '../eng.png'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../logo.svg'
const Navigator = ({display})=> {
  
    return(
        <Navbar bg='dark' variant ='dark' sticky ='top' expand="lg">
            <Navbar.Brand>
                <img src={logo} width='60px'/>{' '} 
                Portfolio 
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/">Homepage</Nav.Link>
                    <Nav.Link href="/skill">Skills</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
           
            <div className='display-language'>
                <img src={jp} className='japan' onClick={()=>display("japan")}></img>
                <img src={eng} className='eng'onClick={()=>display("eng")}></img>
            </div>
        </Navbar>
    )
}
export default Navigator