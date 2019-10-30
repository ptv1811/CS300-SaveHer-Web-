import React, {useState} from 'react';
import Cookies from 'js-cookie';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from '../pages/home/Home';

import axios from 'axios';
import './Login.css';
function Login (props){
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginToken, setLoginToken] = useState('');
    const [userEmail, setUserEmail] = useState('');
    function onChangeEmail(event){
      setEmail(event.target.value);
    }

    function onChagnePassword(event){
      setPassword(event.target.value);
  
    }

    function submitHandling(event){
        const submitData={email,password};
        
        axios.post('http://localhost:3001/api/login',submitData)
          .then(res=>{
                      console.log(res.data);
                      setLoginToken(res.data.uid);
                      setUserEmail(res.data.email);
                      Cookies.set('token',res.data.uid);
                      props.reRenderNav();
                    })
          .catch(err=>console.log(err));
        setEmail('');
        setPassword('');  
        event.preventDefault();
    }


    return (
      <Router>
       {loginToken!=='' && <Redirect to='/' exact/>}
       {loginToken==='' && <Form onSubmit={(event)=>submitHandling(event)}>
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
      
          <Button>Submit</Button>
        </Form>}
        <Switch>
          <Route path='/' exact>
 
             <Home userEmail={userEmail}/>
          </Route>
        </Switch>
      </Router>
    );
}

export default Login;