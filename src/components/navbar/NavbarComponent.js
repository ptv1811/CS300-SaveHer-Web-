import React, {useState} from 'react';

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
import classNames from 'classnames';
import Login from '../login/Login';
import {AuthContext, AuthProvider} from '../config/Auth';
import {URLContext, URLProvider} from '../config/UrlParameters';
import Home from '../pages/home/Home';
import Logout from '../logout/Logout';
import SignUp from '../signup/Signup';
import About from '../../containers/About';
import Contact from '../../containers/Contact'
import '../../assets/css/NavbarComponent.css';

function NavbarComponent(props){
    const navRef= React.createRef();
    const [isOpen, setIsOpen]=useState(false);
     const toggle = ()=>{
      if (window.innerWidth<768)
        {
            setIsOpen(!isOpen);
        }
      else {
          return;
      }
    }
      
    return ( 
      <AuthProvider>   
          <AuthContext.Consumer>
            {({currentUser}) =>
                    (<Router>
                    <URLProvider>
                        <URLContext.Consumer>
                            {({target, currentURL, changeTarget, changeCurrentURL})=>{
                              if (currentUser!==null){changeCurrentURL(window.location.href.split('/')[3]);}
                               return (<div ref={navRef} id="nav" 
                                        className={classNames("navbar-container", 
                                                    {'middle-nav':(target==='HOME' && currentUser!==null) || 
                                                                    ((currentURL==='login'||currentURL==='signup') && (currentUser!==null))})}>
                                        <Navbar color="light" light expand="md">
                                            <NavbarBrand href="/">reactstrap</NavbarBrand>
                                            <NavbarToggler onClick={toggle} />
                                            <Collapse isOpen={isOpen} navbar>
                                            <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                    <Link onClick={(e)=>{
                                                                toggle();
                                                                changeTarget(e.target.innerText);}} className="nav-link" to='/'>HOME</Link>
                                                </NavItem>
                                                <NavItem>
                                                    <Link  onClick={(e)=>{
                                                                toggle();
                                                                changeTarget(e.target.innerText);}} className="nav-link" to='/about'>ABOUT</Link>
                                                </NavItem>
                                                <NavItem>
                                                    <Link  onClick={(e)=>{
                                                                toggle();
                                                                changeTarget(e.target.innerText);}} className="nav-link" to='/contact'>CONTACT</Link>
                                                </NavItem>
                                                <AuthContext.Consumer>
                                                        {({currentUser})=>{
                                                        
                                                        if (currentUser===null)
                                                            {
                                                                return (    <NavItem>
                                                                                <Link onClick={(e)=>{
                                                                                    toggle();
                                                                                    changeTarget(e.target.innerText);}} className="nav-link" to='/login'>LOGIN</Link>
                                                                            </NavItem>  
                                                                        );
                                                            }
                                                            else {
                                                                return (<NavItem><Link onClick={(e)=>{
                                                                                    toggle();
                                                                                    changeTarget(e.target.innerText);}} className="nav-link" to='/logout'>LOGOUT</Link></NavItem>);
                                                            }
                                                        }} 
                                                </AuthContext.Consumer>
                                                <AuthContext.Consumer>
                                                        {({currentUser})=>{
                                                            if (currentUser===null){
                                                                return (
                                                                    <NavItem>
                                                                        <Link onClick={(e)=>{
                                                                                    toggle();
                                                                                    changeTarget(e.target.innerText);}} className="nav-link" to='/signup'>SIGNUP</Link>
                                                                    </NavItem>);
                                                            }
                                                        }}
                                                </AuthContext.Consumer>
                                            </Nav>
                                            </Collapse>
                                        </Navbar>
                                </div>)}}
                            
                        </URLContext.Consumer>                       
                    </URLProvider>
                                <Switch>
                                    <Route path='/' exact>
                                    <AuthContext.Consumer>
                                            {({currentUser})=><Home  user={currentUser}/>}
                                    </AuthContext.Consumer>
                                    </Route>
                                    <Route path='/about' exact>
                                    
                                        <About/>
                                    </Route>
                                    <Route path='/contact' exact>
                                        
                                        <Contact/>
                                    </Route>
                                    <Route path='/login' exact>
                                            
                                        <Login />
                                    </Route>
                                    <Route path='/logout' exact>
                                    <AuthContext.Consumer>
                                            {({currentUser, setCurrentUserNull})=><Logout setCurrentUserNull={setCurrentUserNull} user={currentUser}/>} 
                                    </AuthContext.Consumer>
                                    </Route>
                                    <Route path='/signup' exact>
                                        <SignUp />
                                    </Route>
                                </Switch>
                
                    </Router>)
                }
          </AuthContext.Consumer>
      </AuthProvider>      
    );
}
export default NavbarComponent;