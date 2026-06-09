import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import About from './components/About.jsx';
import AlertMsg from './components/Alert.jsx';


function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] =useState(null);
  const [showAlertOnModeChange,setShowAlertOnModeChange] =useState(false);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode is On','primary')
      setShowAlertOnModeChange(true);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is On','success')
      setShowAlertOnModeChange(true);
    }
  }
  return (
    <>
    <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div style={{height: '60px'}}>
    <AlertMsg alert={alert} showAlertOnModeChange={showAlertOnModeChange} setShowAlertOnModeChange={setShowAlertOnModeChange}/>
    </div>
    <div className="container">
      {/* Routes */}
       <Routes>
         <Route path="/" element={ <TextForm heading='Enter the text to analyse below:' mode={mode}/>} />
         <Route path="/about" element={<About mode={mode}/>} />
       </Routes>
    </div>
    
    </>
    
  )
}

export default App
