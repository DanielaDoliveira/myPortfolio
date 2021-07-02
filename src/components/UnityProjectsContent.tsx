import project from "../assets/.env.photos/project.png"
import bee from "../assets/.env.photos/bee.png"
import gamejam from "../assets/.env.photos/gamejam.png"
import ninja from "../assets/.env.photos/ninja.png"
import ninjat from "../assets/.env.photos/ninjat.png"

import "../styles/uProjects.scss"


export function UnityProjectsContent ()
{

 
  
  return (
    <div className = "DivUnityProjects">
        <h1 className= "datasheet">Unity Projects:</h1>
      
            <ul id = "unityList">

            <li>
            <a href = "https://mega.nz/folder/CKBiBITQ#DAH4tJXpF0psWfon9i8qlA">
            <img src = {ninja} id = "projectimg"/>
              </a>
           <p>Ninja Challenge <br/> Windows,Mac and Linux</p> 
            </li>

            <li>
            <a href = "https://play.google.com/store/apps/details?id=com.DanielaFialho.ProjetoBeeVersao">
              
            <img src = {bee} id = "projectimg"/>
              </a>
            <p>Bee <br/> Android</p> 
            </li>

            <li>
                <a href = "https://mega.nz/folder/HXpy2IzZ#Tf_JM5c_5Gdpxz7IHXOiNg">
                    <img src = {ninjat} id = "projectimg"/>
                </a>
                  <p>Ninja:Training to Win<br/> Windows,Mac and Linux</p> 
            </li>

            <li>
            <a href = "https://globalgamejam.org/2021/games/are-you-sure-1">
            <img src = {gamejam} id = "projectimg"/>
            </a>
         
            <p>Are you sure? <br/> Windows,Mac and Linux</p> 
            </li>

            <li>
           <a href = "https://github.com/Danethree/ProjetoUnity3D">
           <img src = {project} id = "projectimg"/>
            <p> Unity 3D Prototype <br/> Windows,Mac and Linux</p> 
             </a> 
            </li>

            </ul>
                  
            
                    
  
         
     </div>

  )

}