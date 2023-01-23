import React from 'react';
import './App.css';
import Nav from './components/nav';
import Body from './components/body';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Body/>
        <Footer/>
    </div>  
  );
}

export default App;
