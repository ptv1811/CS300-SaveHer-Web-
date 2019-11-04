import React, {useState, useEffect} from 'react';

import app from '../../Firebase';

export const AuthContext =  React.createContext();
let authIsMounted= false;
export const AuthProvider = (props) => {
        
        const [currentUser, setCurrentUser] = useState(null);
        const abortController = new AbortController();
       
    //   app.auth().signOut()
    useEffect(()=>{
        authIsMounted=true;
        app.auth().onAuthStateChanged((user)=>
                           { 
                             if (authIsMounted===true) {setCurrentUser(user)};                                
                           });
            return function cleanup(){
                abortController.abort();
                authIsMounted=false;
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
