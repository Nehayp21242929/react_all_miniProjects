import React,{useState} from 'react';
import Navbar1 from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import About from './components/About.jsx';


function App() {
  const [mode,setMode] =useState('light');
  const toggleMode=()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading='Enter the text to analyse below:' mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  )
}

export default App
