import React, {useState, useEffect} from 'react';

export const URLContext = React.createContext();
export const URLProvider = (props)=>{
        const [currentURL, setCurrentURL] = useState(window.location.href.split('/')[3]);

        const changeCurrentURL = (x)=>{
            setCurrentURL(x);
        }
    const [target, setTarget] = useState('');

        const changeTarget = (x) => {
            setTarget(x);
        } 
        const propsData = {target, currentURL, changeTarget, changeCurrentURL};
    return (
        <URLContext.Provider value={propsData}>
                {props.children}    
        </URLContext.Provider>
    )
}