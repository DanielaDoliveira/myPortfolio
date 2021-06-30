
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import { Homepage } from './pages/Homepage';
import { UnityProjects } from './components/UnityProjects';
import { MyFooter } from './components/MyFooter';
import { Rprojects } from './pages/RProjects'

function App() {
  return (
    <div className="App">
      
  <Homepage/>

   
    </div>
  );
}

export default App;
