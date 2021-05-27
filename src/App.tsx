import React from 'react';
import './scss/App.scss'
import NavBar from './shared/NavBar/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import Characters from './pages/personagens/index'
import Comics from './pages/comics/index';
import Home from "./pages/home/Home";


const App: React.FC = () => {

  return (

    <Router>
      <NavBar />
      <Home />
    </Router>
  )


}

export default App;
