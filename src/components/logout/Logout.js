import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import app from '../../Firebase';

function Logout(props){
  props.reRenderNav();
    app.auth().signOut();
    props.setCurrentUserNull();

      return (
            <Redirect to='/login' exact/>
           )
}
export default Logout;