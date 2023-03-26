
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);  //alert State is an object

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      typ: type
    })  // setAlert is created as an object means alert is an object using showAlert() function

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#041134';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode'

      // setInterval(()=>{
      //   document.title='Click Here'
      // }, 200);
      // setInterval(()=>{
      //   document.title='Hit Me'
      // }, 300)  // For eye catching experience
    }  
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils2" aboutText="About TextUtils2"/> */}
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    {/* whole alert object is passed which provides access to msg and type of alert */}
    <Alert alert={alert}/>  
    <div className="container my-3">
      <TextForm heading1="Enter the text to analyze" heading2="Your text summary" mode={mode} showTheAlert={showAlert}/>
    </div>
      {/* <About/> */}
    </>
  );
}

export default App;
