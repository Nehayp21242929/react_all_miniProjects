import Navbar1 from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <>
    <Navbar1 title="TextUtils"/>
    <div className="container">
      <TextForm heading='Enter the text to analyse below:'/>
      {/* <About/> */}
    </div>
    </>
  )
}

export default App
