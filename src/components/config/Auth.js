import React, {useState, useEffect} from 'react';

import app from '../../Firebase';

export const AuthContext =  React.createContext();
export const AuthProvider = (props) => {
        
        const [currentUser, setCurrentUser] = useState(null);
      
        const abortController = new AbortController();
       
    //   app.auth().signOut()
    useEffect(()=>{
     
        app.auth().onAuthStateChanged((user)=>setCurrentUser(user));
            return function cleanup(){
                abortController.abort();
            }
    },[]);  

    function setCurrentUserNull(){
        setCurrentUser(null)
    }

    const propsData={currentUser,setCurrentUserNull};
    
    return (
        <AuthContext.Provider value={propsData}>
            {props.children}
        </AuthContext.Provider>
    );

}
