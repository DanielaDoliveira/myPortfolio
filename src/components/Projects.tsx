

import '../styles/projects.scss'
import unity from "../assets/.env.photos/unitylogo.jpg"
import reactnative from "../assets/.env.photos/reactNativeIcon.svg"
import react from "../assets/.env.photos/reactJs.svg"

import '../styles/projects.scss';
import {useHistory} from 'react-router-dom'
export function Projects()
{
  const history = useHistory(); 
  function handleClickUnityProjects()
  {
      history.push('/projects/UnityEngine')
  }
  function handleClickReactNativeProjects()
  {
    history.push('/projects/ReactNative')
  }
  return(
        <div className = "myProjects" id = "myProjects">
          <h1 className = "datasheet">Projetos</h1>   
          <p> Que tipo de projeto deseja visualizar?<br/> Selecione uma tecnologia:</p>
          
          
          <div className = "buttonProjects">
            <ul className = "ultechnologyButtons">
              <li>
                <img className = "pictures"src = {unity} onClick = {handleClickUnityProjects}/>
                <span className = "subtitle"><p>Unity Engine</p></span>
              </li>
              <li>
                <img className = "pictures"src = {reactnative} onClick = {handleClickReactNativeProjects}/>
                <span className = "subtitle"><p><br/>React Native</p></span>
              </li>
          
            </ul>
             
          </div>
         

          
          
        </div>



  )
}