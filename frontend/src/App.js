import React, { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/mainComponents/Header'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

import './styles/App.css';

const App = () => {

  const [isLoginPageActive, setIsLoginPageActive] = useState(false);
  const [isRegisterPageActive, setIsRegisterPageActive] = useState(false);

  return (
    <>
      <Router>
          <Header loginActive={isLoginPageActive} loginActiveChange={setIsLoginPageActive} registerActive={isRegisterPageActive} registerActiveChange={setIsRegisterPageActive}/>
      </Router>
      {isLoginPageActive && LoginPage}
      {isRegisterPageActive && RegisterPage}
      <main>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
