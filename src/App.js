import React from 'react';
import NavbarComponent from './components/navbar/NavbarComponent';
import './assets/css/App.css';
require('dotenv').config();
function App() {
  return (
    <div className="App"> 
      <NavbarComponent/>
    </div>
  );
}

export default App;
