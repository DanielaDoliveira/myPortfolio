import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route path = "/" exact component={Homepage}/> 
               
        </BrowserRouter>
    </div>
  );
}

export default App;
