import React from "react";
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Detail from './components/Detail.jsx';
import Create from './components/Create.jsx';


function App() {
  return (
    <div>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/home' component={NavBar}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/home/create' component={Create}/>
      <Route path='/home/detail/:id' component={Detail}/>
    </div>
  );
}

export default App;
