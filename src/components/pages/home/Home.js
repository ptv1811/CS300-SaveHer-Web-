import React, {useState} from 'react';
import {
    Redirect
  } from "react-router-dom";

  function Home(props){


    const [currentUser] = useState(props.user);

        return (
          <div>
            {currentUser===null && <Redirect to='/login'/>}
            {currentUser!==null && <h1>{`HELLO ${currentUser.displayName}`}</h1>}
          </div>
                    
        )
  }
export default Home;