import React, {useState} from 'react';
import Cookies from 'js-cookie';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Alert } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from '../pages/home/Home';
import app from '../../config/Firebase';
import './Login.css';
function Login (props){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginToken, setLoginToken] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errCode, setErrCode]= useState('');
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
              setUserEmail(res.user.displayName);
            })
            .catch(err=>{
              setErrCode(err.message);
            });
        //clear the input 
        setEmail('');   
        setPassword('');  
        
     
    }


    return (
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
          
          {errCode!==''&& <Alert color="danger">Failed to login</Alert>}
        </Form>}
        {loginToken==='' && <Button  className="login-fb">Log in with Facebook</Button>} 
        <Switch>
          <Route path='/' exact>
             <Home userEmail={userEmail}/>
          </Route>
        </Switch>
      </Router>
    );
}

export default Login;