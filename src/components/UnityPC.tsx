
import ninja from "../assets/.env.photos/ninja.png"
import ninjat from "../assets/.env.photos/ninjat.png"
import gamejam from "../assets/.env.photos/gamejam.png"
import camouflageSystem from "../assets/.env.photos/camouflageSystem.png"
import platformtd from "../assets/.env.photos/platform.png"
import project from "../assets/.env.photos/project.png"

export function UnityPC()
{
  return(
    <div>
      <ul className = "unityList">
      <li>
            <a href = "https://mega.nz/folder/CKBiBITQ#DAH4tJXpF0psWfon9i8qlA">
            <img src = {ninja} id = "projectimg"/>
              </a>
        
            
      </li>
      <li>
           <a href = "https://mega.nz/folder/HXpy2IzZ#Tf_JM5c_5Gdpxz7IHXOiNg">
             <img src = {ninjat} id = "projectimg"/>
          </a>
         
     </li>

     <li>
            <a href = "https://globalgamejam.org/2021/games/are-you-sure-1">
            <img src = {gamejam} id = "projectimg"/>
            </a>
     </li>

     <li>
           <a href = "https://github.com/Danethree/CamouflageSystemAI">
           <img src = {camouflageSystem} id = "projectimg"/>
             </a> 
    </li>
    <li>
           <a href ="https://github.com/Danethree/platform2D">
           <img src = {platformtd} id = "projectimg"/>
           </a> 
   </li>
   <li>
           <a href = "https://github.com/Danethree/ProjetoUnity3D">
           <img src = {project} id = "projectimg"/>
          
             </a> 
            </li>
      




      </ul>
    </div>
  )
}