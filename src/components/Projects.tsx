

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
  const [isUnity,setIsUnity] = useState(false);
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
            {!isUnity &&(
               <div>
                     {( !isReactNative &&
                    <div>
                      <h1 className = "datasheet">Projects</h1>
                    <p  id = "projectsDescription"> Which project type do you want to visualize?
                    <br/><b>CHOOSE</b> pressing one options bellow:</p>
                      </div>
                    )}
                
 
                 </div>
               )}
          {isUnity &&(
                   
                  <h1 className = "datasheet">Unity</h1>

              )}
                 {isReactNative &&(
                   
                   <h1 className = "datasheet">React</h1>
 
               )}
        
        
          
          <div className = "buttonProjects">
            <ul className = "ultechnologyButtons">
              <li>
               
                <img className = "pictures"src = {unity} onClick = {handleClickUnityProjects}/>
                
              </li>
              <li>
                <img className = "pictures"src = {reactnative} onClick = {handleClickReactNativeProjects}/>
               
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