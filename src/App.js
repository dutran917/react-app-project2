import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import './App.css'
import Navigator from './component/Navigator'
import Homepage from './component/Homepage'
import Contact from './component/Contact'
import Skill from './component/Skill'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react'
function App() {
  const [language,setLanguage] = useState('eng')
  const display = (language) =>{
    setLanguage(language)
  }
  return (
    <Router>
      <Navigator display={display} language={language}></Navigator>
      <Route exact path='/' component ={()=> <Homepage language={language}/>}></Route>
      <Route path='/skill' component ={Skill}></Route>
      <Route path='/contact' component ={Contact}></Route>
    </Router>
  );
}

export default App;
