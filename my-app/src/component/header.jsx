import React from 'react';
import {
    BrowserRouter as Router,
   
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Home from  './Home'
import About from './about';
import Loops from './loops';
import Compo from './compo';
import State from './state';
import Merrige from './merrige';
import Lifecycle from './lifeCycle';
import Api from './api';

function header() {

    const Numbers={'/home':'Home','/about':'About','/loops':'loops','/compo':'Compo','/state':'State','/merrige':'merrige','/lifeCycle':'lifeCycle','/api':'api'}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return   <li className="nav-item">
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
       <>
       <Router>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       {returndata}
       
       
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/loops' element={<Loops></Loops>}></Route>
    <Route path='/compo' element={<Compo></Compo>}></Route>
    <Route path='/state' element={<State></State>}></Route>
    <Route path='/merrige' element={<Merrige></Merrige>}></Route>
    <Route path='/LifeCycle' element={<Lifecycle></Lifecycle>}></Route>
    <Route path='/Api' element={<Api></Api>}></Route>


</Routes>
</Router>
       </>
    );
}

export default header;