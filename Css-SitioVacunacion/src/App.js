import React from 'react';



import {Navbar, Footer} from './components';
import { About, Contact, Header, PrepInfo } from './container';
import './App.css';



const App = () => {
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <PrepInfo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
