import React, {useState,useEffect} from 'react';
import firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Alert } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import Home from '../pages/home/Home';
import app from '../../Firebase';
import {AuthContext, AuthProvider }from '../config/Auth';
import './Login.css';

let isMounted = false;


function Login (props){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginToken, setLoginToken] = useState('');
    const [errCode, setErrCode]= useState('');
    const abortController = new AbortController();
 
    useEffect(()=>{
      isMounted=true;
      return function cleanup() {     
         abortController.abort();
        isMounted=false;  
      }; 
    },[])
    
    if (errCode!==''){
     const id = setTimeout(()=>{
          setErrCode('');
          clearTimeout(id);
     },3400);
    }

    function loginWithFb(){
          const provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider)
            .then (res => {
              if (isMounted===true)  {
                setLoginToken(res.user.uid);
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
              console.log({errorCode,errorMessage,email,credential})
            });
    }

    function onChangeEmail(event){
      setEmail(event.target.value);
    }

    function onChagnePassword(event){
      setPassword(event.target.value);
  
    }

     function submitHandling(event){
        event.preventDefault();
          app.auth().signInWithEmailAndPassword(email,password)
            .then(res=>{
              setLoginToken(res.user.uid);
              })
            .catch(err=>{
              setErrCode(err.message);
            });
        //clear the input 
        setEmail('');   
        setPassword('');    
    }
    return (
    <AuthProvider>
      <Router>
        <AuthContext.Consumer>
            {({currentUser})=>{
                if (currentUser !== null) { 
                    return (<Redirect to='/' exact/>)
                  }
                else {
                    return (
                      <Form onSubmit={(event)=>submitHandling(event)}>
                        <FormGroup >
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" 
                                name="email" 
                                id="exampleEmail"
                                placeholder="example@email.com"
                                value={email} 
                                onChange={(event)=>onChangeEmail(event)}/>
                        </FormGroup>
          
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" 
                                name="password" 
                                id="examplePassword" 
                                placeholder="password" 
                                value={password}
                                onChange={(event)=>onChagnePassword(event)}/>
                        </FormGroup>
                        <Button>Log In</Button>
                        <Button onClick={loginWithFb} className="login-fb"> <FontAwesomeIcon className="fb-icon" icon={faFacebook} />Log in with Facebook </Button>
                      </Form>
                    );
                }    
              }
            }

              
        </AuthContext.Consumer>
      
        {errCode!==''&& <div>{<Alert color="danger">Failed to login</Alert>}</div>}
        <Switch>
          <Route path='/' exact>
            <AuthContext.Consumer>
              {({currentUser})=>  <Home user={currentUser}/>}
            </AuthContext.Consumer>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>

    );
}

export default Login;