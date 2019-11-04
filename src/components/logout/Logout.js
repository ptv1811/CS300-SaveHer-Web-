import React from 'react';
import {
    Redirect
  } from "react-router-dom";
import app from '../../Firebase';

function Logout(props){
    app.auth().signOut();
    props.setCurrentUserNull();
      return (
            <Redirect to='/login' exact/>
           )
}
export default Logout;