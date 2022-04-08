import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import  Contact  from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
import {useEffect, useState } from 'react';

function App() {
  
  const [theme, setTheme]  = useState('light');


  useEffect(() => {

    if (sessionStorage.getItem('theme-color')===null) {
      setTheme('light');
    }
    else{
      const state = JSON.parse(sessionStorage.getItem('theme-color'));
       setTheme(state);
    }
    
  }, [])

  const changeTheme = ()=>{
    
    theme === "light" ? setTheme("dark") : setTheme('light');
    
    theme === "light" ? sessionStorage.setItem('theme-color',JSON.stringify('dark')) : sessionStorage.setItem('theme-color',JSON.stringify('light'));
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
