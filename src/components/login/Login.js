import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
                      console.log(res.data.email);
                      setLoginToken(res.data.uid);
                      setUserEmail(res.data.email);
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
              <h1>HOME PAGE</h1>
              <h2>{`HELLO ${userEmail}`}</h2>
          </Route>
        </Switch>
      </Router>
    );
}

export default Login;