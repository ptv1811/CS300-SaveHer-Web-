import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
import '../../../assets/css/Home.css';
function Home(props){
    const [currentUser] = useState(props.user);
        return (
          <div className="home-page">
            {currentUser===null && <Redirect to='/login'/>}
            {currentUser!==null && 
                <div className="homepage">
                  <div className="homepage-header"></div>
                  <div className="homepage-body">
                    <h1 className="title">{`HELLO ${currentUser.displayName}`}</h1> 
                  </div>
                </div>   
            }

          </div>                  
        )
  }
export default Home;