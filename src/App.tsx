import React from 'react';
import './scss/App.scss'
import NavBar from './shared/NavBar/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import User from "./pages/user/User";


const App: React.FC = () => {

  return (

    <Router>
      <NavBar />
      <User />
    </Router>
  )


}

export default App;
