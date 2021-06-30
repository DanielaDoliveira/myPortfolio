
import {Button} from "./Button"
import { MenuBar } from './MenuBar';
import {MyFooter} from './MyFooter'
import '../styles/uProjects.scss'

import project from "../assets/.env.photos/project.png"
import bee from "../assets/.env.photos/bee.png"
import gamejam from "../assets/.env.photos/gamejam.png"
import ninja from "../assets/.env.photos/ninja.png"
import ninjat from "../assets/.env.photos/ninjat.png"
export function UnityProjects() {
    


  return(
    <div className = "UnityProjects">
           <MenuBar/>
      <div className = "secondDivUnityProjects">
           
      
               <ul className = "gallery">
               <li>
               <img src = {project} className = "projectimg"alt = "Unity3D Project "/>
                    <p className = "subtitle">Unity 3D Project</p>
               </li>
               <li>
               <img src = {bee} className = "projectimg"alt = "Bee "/>
                    <p className = "subtitle">Bee</p>
               </li>
                   <li>
                   <img src = {gamejam} className = "projectimg"alt = "Are you sure? "/>
                    <p className = "subtitle">Are you sure?</p>
              </li> 
                   

               </ul>
              
               <ul className = "gallery">
               <li>
               <img src = {ninja} className = "projectimg"alt = "Unity3D Project "/>
                    <p className = "subtitle">Ninja Challenge</p>
               </li>
               <li>
               <img src = {ninjat} className = "projectimg"alt = "Bee "/>
                    <p className = "subtitle">Ninja:Training to Win</p>
               </li>
                 

               </ul>
              
          
          
      </div>
      <MyFooter/>
      </div>
  );

}