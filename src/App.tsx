
import logo from './logo.svg';
import './App.css';

import {Route,BrowserRouter} from 'react-router-dom'
import { Homepage } from './pages/Homepage';
import { UnityProjects } from './components/UnityProjects';
import { MyFooter } from './components/MyFooter';
import { Rprojects } from './pages/RProjects'
import { UProjects } from './pages/UProjects'
function App() {
  return (
    <BrowserRouter>
   
            <Route path = "/" exact component={Homepage}/> 
            <Route path = "/projects/ReactNative" component={Rprojects}/> 
          <Route path = "/projects/UnityEngine" component={UProjects}/> 
           
</BrowserRouter>
  );
}

export default App;
