import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
      } from 'reactstrap';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
import Login from '../login/Login';

function NavbarComponent(props){

    const [isOpen, setIsOpen]=useState(false);
    const [reRender, setReRender]=useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    function forceReRender(){
        setReRender(true);
    }
    return ( 
      <Router>
        <div className="navbar-container">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Link className="nav-link" to='/'>HOME</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to='/about'>ABOUT</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to='/contact'>CONTACT</Link>
            </NavItem>
           {Cookies.get('token')===undefined && <NavItem>
                <Link className="nav-link" to='/login'>LOGIN</Link>
            </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
      </div>

                <Switch>
                
                    <Route path='/' exact>
                        <h1>HOME PAGE</h1>
                    </Route>
                    <Route path='/about' exact>
                        <h1>ABOUT PAGE</h1>
                    </Route>
                    <Route path='/contact' exact>
                        <h1>CONTACT PAGE</h1>
                    </Route>
                    <Route path='/login' exact>
                        <Login reRenderNav={forceReRender}/>
                    </Route>
                
                </Switch>
 
     </Router>
    );
}

export default NavbarComponent;