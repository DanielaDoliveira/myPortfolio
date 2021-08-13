
import ninja from "../assets/.env.photos/ninja.png"
import ninjat from "../assets/.env.photos/ninjat.png"
import gamejam from "../assets/.env.photos/gamejam.png"
import camouflageSystem from "../assets/.env.photos/camouflageSystem.png"
import workshop from "../assets/.env.photos/workshop.png"
import project from "../assets/.env.photos/project.png"
import gameplay from "../assets/.env.photos/gameplay.jpg"

import "../styles/newUnityCss.scss"
export function UnityPC()
{
  return(
   <div>
     
      <div className = "gallery-container">
    
    <div className="item-gallery">
    
    <a href = "https://mega.nz/folder/CKBiBITQ#DAH4tJXpF0psWfon9i8qlA"> 
        <img src = {ninja} id = "img-gallery"/>
    
    
    </a>
    </div>
    <div className="item-gallery">
  
    <a href = "https://mega.nz/folder/HXpy2IzZ#Tf_JM5c_5Gdpxz7IHXOiNg"> <img src = {ninjat} id = "img-gallery"/>
    </a>
    
    </div>
    <div className="item-gallery">
    <a href = "https://globalgamejam.org/2021/games/are-you-sure-1">
  
        <img src = {gamejam} id = "img-gallery"/></a>
      
   

    </div>
    <div className="item-gallery">
    <a href = "https://github.com/Danethree/CamouflageSystemAI">
       <img src = {camouflageSystem} id = "img-gallery"/></a>
       
      
    </div>
    <div className="item-gallery">
    <a href = "https://github.com/Danethree/ProjetoUnity3D">
      
       <img src = {project} id = "img-gallery"/>
      
        
         </a>
    </div>
    <div className="item-gallery">
    <a href = "https://danethree.itch.io/platform2d-prototypr">
       <img src = {workshop} id = "img-gallery"/>
      
    
    
         </a>
    </div>
    <div className="item-gallery">
        
    <a href = "https://danethree.itch.io/infinite-driving-3d">
       <img src = {gameplay} id = "img-gallery"/>
      
      
    
     </a> 
      

    </div>
  
    
      
        
 
    
     



    


  
     
     

 
</div>
   </div>
  )
}