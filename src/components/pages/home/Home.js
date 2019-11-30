import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
import '../../../assets/css/Home.css';
import {AuthContext, AuthProvider }from '../../config/Auth';
function Home(props){
    const demoRef= React.createRef();
    useEffect(()=>{

      window.addEventListener('scroll',()=>{
        if (demoRef.current!==null){
          demoRef.current.style.opacity=1-(window.pageYOffset/700);
        }
      })
    },[])
    const [currentUser] = useState(props.user);
        return (
                      <div className="home-page">
                          {currentUser===null && <Redirect to='/login'/>}
                          {currentUser!==null && 
                              <div className="homepage">
                                <div className="homepage-header" ref={demoRef}></div>
                                <div className="homepage-body">
                                  <h1 className="title">{`HELLO ${currentUser.displayName}`}</h1> 
                                </div>
                              </div>   
                         }
                      </div>        
                    )
                }
export default Home;