import project from "../assets/.env.photos/project.png"
import bee from "../assets/.env.photos/bee.png"
import gamejam from "../assets/.env.photos/gamejam.png"
import ninja from "../assets/.env.photos/ninja.png"
import ninjat from "../assets/.env.photos/ninjat.png"
import {Button} from "./Button"
import "../styles/uProjects.scss"
import { useHistory } from "react-router-dom"

export function UnityProjectsContent ()
{

  const buttonBack  = "🢀"
  const history = useHistory();
  function handleBackButton ()
  {
    history.push("/");
  } 
  return (
    <div className = "secondDivUnityProjects">
           
     <div className = "thirdDivUnityProjects">
     <h1 className= "titles">Meus Projetos Unity</h1>
      <span className = "lineTitle"></span>
   
    <ul className = "gallery">
          <li>
          <img src = {project} className = "projectimg"alt = "Unity3D Project "/>
              <p className = "subtitle">Unity 3D Project</p>
              <p>Windows,Mac and Linux</p>
          </li>
          <li>
          <img src = {bee} className = "projectimg"alt = "Bee "/>
              <p className = "subtitle">Bee</p>
              <p>Android</p>
          </li>
          
    </ul>
    <ul className = "gallery">
    <li>
              <img src = {gamejam} className = "projectimg"alt = "Are you sure? "/>
              <p className = "subtitle">Are you sure?</p>
              <p>Windows, Mac and Linux</p>
              </li> 
               
              <li>
                 <img src = {ninja} className = "projectimg"alt = "Unity3D Project "/>
              <p className = "subtitle">Ninja Challenge</p>
              <p>Windows,Mac,Linux and Android</p>
          </li>
          <li>
        <img src = {ninjat} className = "projectimg"alt = "Bee "/>
            <p className = "subtitle">Ninja:Training to Win</p>
            <p>Windows, Mac and Linux</p>
        </li>
      </ul>
 
   <Button onClick = {handleBackButton}
  >
     {buttonBack} 
   </Button>

     </div>
 
</div>

  )

}