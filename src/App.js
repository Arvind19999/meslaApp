import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import JobList from '../src/Jobs/JobList';

import {BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  return (
  <>
    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component ={Contact} />
      <Route exact path="/jobs" component ={JobList} />
      </Switch> 
      </BrowserRouter>
      <Login />  
    <Footer />
  </>
  );
}

export default App;
