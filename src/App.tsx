
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
        <Route exact path = "/" component = {Homepage}/>
        <Route path = "/projects/unityProjects" component = {UProjects}/>
        <Route path = "/projects/reactNativeProjects" component = {Rprojects}/>
    </BrowserRouter>
  );
}

export default App;
