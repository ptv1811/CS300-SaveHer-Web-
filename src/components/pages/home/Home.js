import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {
    Redirect
  } from "react-router-dom";
  function Home(props){
        if (props.user===null){
            return (<Redirect to='/login' exact/>)
        }
        else {
            return (
                <Router>
                    <h1>HOME PAGE</h1>
                    <h2>{`HELLO ${props.user.displayName} `}</h2>
                </Router>
            )
        }
  }






export default Home;