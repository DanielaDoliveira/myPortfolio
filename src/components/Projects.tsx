

import '../styles/projects.scss'
import unity from "../assets/.env.photos/unitylogo.jpg"
import reactnative from "../assets/.env.photos/reactnativeicon.png"

import '../styles/projects.scss';

export function Projects()
{
  
  function handleClickUnityProjects()
  {

  }
  function handleClickReactNativeProjects()
  {

  }
  return(
        <div className = "myProjects">
          <h1 className = "datasheet">Projetos</h1>   
          <p>Escolha uma tecnologia</p>
          
          
          <div className = "buttonProjects">
              <img className = "pictures"src = {unity} onClick = {handleClickUnityProjects}/>
               <span className = "subtitle"><p>Unity Engine</p></span>
          </div>
          <div className = "buttonProjects">
              <img className = "pictures"src = {reactnative} onClick = {handleClickReactNativeProjects}/>
            <span className = "subtitle"><p>React Native</p></span>
          </div>
         

          
          
        </div>



  )
}