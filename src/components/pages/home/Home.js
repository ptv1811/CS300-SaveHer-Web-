import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

  function Home(props){
    return (
        <Router>
            <h1>HOME PAGE</h1>
            <h2>{`HELLO ${props.userEmail}`}</h2>
        </Router>
    )
}






export default Home;