import React from 'react';

import './App.css';

import NavBar from './componentNav/NavBar'

import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu'
import Reportes from './pages/Reportes'
import Soporte from './pages/Soporte'
import Configuracion from './pages/Configuracion';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';







function App (){
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <div>
        <NavBar/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/reportes" component={Reportes}/>
        <Route exact path="/configuracion" component={Configuracion}/>
        <Route exact path="/soporte" component={Soporte}/>
        </div>
      </Switch>
    </Router>
  )
}

export default App;
