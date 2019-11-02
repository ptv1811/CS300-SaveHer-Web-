import React, {useState} from 'react';
import firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Alert } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from '../pages/home/Home';
import app from '../../Firebase';
import {AuthContext, AuthProvider }from '../config/Auth';
import './Login.css';
function Login (props){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginToken, setLoginToken] = useState('');
    const [errCode, setErrCode]= useState('');

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
        setLoginToken(res.user.uid);
        props.reRenderNav();
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
              props.reRenderNav();
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
       {loginToken!=='' && <Redirect to='/' exact/>}
       {loginToken==='' && 
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
              
          {errCode!==''&& <div>{<Alert color="danger">Failed to login</Alert>}</div>}
        </Form>}
        {loginToken==='' && <Button onClick={loginWithFb}  className="login-fb">Log in with Facebook</Button>} 
        <Switch>
          <Route path='/' exact>
            <AuthContext.Consumer>
              {({currentUser})=><Home user={currentUser}/>} 
            </AuthContext.Consumer>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    );
}

export default Login;