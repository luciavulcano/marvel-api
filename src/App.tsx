import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './scss/App.scss'
import NavBar from './shared/NavBar/NavBar';
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Personagens from "./pages/personagens/Personages";
import Comics from "./pages/comics/Comics";


const App: React.FC = () => {

  return (


    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/quadrinhos" component={Comics}></Route>
        <Route path="/personagens" component={Personagens}></Route>
      </Switch>
    </Router>



  )
}

export default App;
