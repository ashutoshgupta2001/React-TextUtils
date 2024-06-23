import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textforms from './components/Textforms';
import { useState } from 'react';
import Alert from './components/Alert';

// import { BrowserRouter as router,Switch, Route, Link, Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Enable DarkMode")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Disable DarkMode')
      document.body.style.backgroundColor = 'rgb(42 65 131)'
      showAlert("DarkMode has been enabled.", "success")
    }
    else {
      setMode('light')
      setModeText('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      showAlert("DarkMode has been disabled.", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
        <Textforms heading="Enter the text to Analyze" mode={mode} />
          {/* <Switch>
            <Route path="/">
              <Textforms heading="Enter the text to Analyze" mode={mode} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
