import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container} from 'reactstrap';
import { Alert } from 'reactstrap';
import app from '../../Firebase';
import classNames from 'classnames';
import {
  Redirect
} from "react-router-dom";
import './Signup.css';
function SignUp(props){
  const [email, setEmail]= useState('');
  const [password, setPassword] =  useState('');
  const [displayName, setDisplayName] = useState('');
  const [SignUpSuccess, setSignUpSuccess] = useState(false);
  const [errCode, setErrcode] = useState('');

  setTimeout(()=>{
    if (errCode!=='') setErrcode('');
  },3500);
  function submitHandling(event){
    app.auth().createUserWithEmailAndPassword(email,password)
      .then(
        user => user.user.updateProfile({
          displayName: displayName
        }).then(res=>{
          setSignUpSuccess(true);
      
        })
      )
      .catch(err=>{
        setErrcode(err.code);
      })
    event.preventDefault();
    setEmail('');
    setPassword('');
    setDisplayName('');
  }
  function onChangeEmail(event){
    setEmail(event.target.value);
  }

  function onChangePassword(event){
    setPassword(event.target.value);
  }

  function onChangeDisplayName(event){
    setDisplayName(event.target.value);
  }

    return (
      <div>
      { SignUpSuccess=== true && <Redirect to='/' exact/> }
      { SignUpSuccess===false && <Container>
          <Form onSubmit={submitHandling}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={(e)=>onChangeEmail(e)} type="email" name="email" id="exampleEmail" placeholder="example@email.com" value={email} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input onChange={(e)=>onChangePassword(e)} type="password" name="password" id="examplePassword" placeholder="password" value={password} />
          </FormGroup>
          <FormGroup>
            <Label for="displayName">Display Name</Label>
            <Input onChange={(e)=>onChangeDisplayName(e)} type="text" name="displayName" id="displayName" placeholder="your display name" value={displayName} />
          </FormGroup>
          <Button>Submit</Button>
            <Alert className={classNames({'alert-disappear':errCode===''},{'alert-appear':errCode!==''})}  color="danger">Sign Up Failed</Alert>
        </Form>
      </Container>}
      </div>
    );
}
export default SignUp;  