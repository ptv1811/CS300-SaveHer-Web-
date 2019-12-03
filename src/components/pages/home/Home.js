import React, {useState, useEffect} from 'react';
import {
    Redirect
} from "react-router-dom";
import Upload from '../../upload/UploadImage';
import '../../../assets/css/Home.css';
  		
function Home(props){
  const demoRef= React.createRef();
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if (demoRef.current!==null){
          demoRef.current.style.opacity=1-(window.pageYOffset/700);
        }
      })
    }, [])
    
  
  const [currentUser] = useState(props.user);
        return (
                      <div className="home-page">
                          {currentUser===null && <Redirect to='/login'/>}
                          {
                            currentUser !== null &&
                              <div className="homepage">
                                <div className="homepage-header" ref={demoRef}></div>
                                <div className="homepage-body">
                                  <Upload/>
                                </div>
                              </div>
                          }
                      </div>
                )
 }
export default Home;
