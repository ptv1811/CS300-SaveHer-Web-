import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

  function Home(props){
        if (props.user===null){
            return (<h1>LOGIN PLEASE!!</h1>)
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