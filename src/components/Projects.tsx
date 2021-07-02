

import '../styles/projects.scss'
import unity from "../assets/.env.photos/unitylogo.jpg"
import reactnative from "../assets/.env.photos/reactNativeIcon.svg"
import react from "../assets/.env.photos/reactJs.svg"
import {useHistory} from "react-router-dom"
import '../styles/projects.scss';
import { UnityProjectsContent } from './UnityProjectsContent'
import { Rprojects } from './RProjects'
import { useState } from 'react'

export function Projects()
{
  const [isUnity,setIsUnity] = useState(true);
  const [isReactNative,setIsReactNative] = useState(false);
 
  const history = useHistory();
  function handleClickUnityProjects()
  {
    setIsReactNative(false);
    setIsUnity(true)

     
 
  }
  function handleClickReactNativeProjects()
  {
    setIsReactNative(true);
    setIsUnity(false);
   
  }
  return(
        <div className = "myProjects"id = "projects">
          <h1 className = "datasheet" >Projects</h1>   
          <p  id = "description"> What project type do you want to visualize?
          <br/> Choose one technology</p>
        
          
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
            <div id = "myPortfolioProject">
             
                 {isUnity &&(
                   
                      <UnityProjectsContent/>

                 )}
                 {isReactNative &&(
                    <Rprojects/>

                 )}
               
                
                
          </div>
          
         

          
          </div>
        </div>

  )
}