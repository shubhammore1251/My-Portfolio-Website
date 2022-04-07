import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import  Contact  from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import {useState } from 'react';

function App() {
  
  const [theme, setTheme]  = useState('light');


  const changeTheme = ()=>{
    
    theme === "light" ? setTheme("dark") : setTheme('light')

  }
   

  return (
    <>
      <div className="app" data-theme={theme}>
        <Navbar changeTheme={changeTheme} currTheme={theme}/>
        <Header currTheme={theme}/>
        <About currTheme={theme}/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
     
    </>
  )
}

export default App;
