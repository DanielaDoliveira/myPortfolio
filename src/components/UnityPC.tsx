
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
    <div className = "gallery-container">
        <div className="item-gallery">
        
     
            <img src = {ninja} id = "img-gallery"/>
          <span className = "titleGallery">  <a href = "https://mega.nz/folder/CKBiBITQ#DAH4tJXpF0psWfon9i8qlA"> Ninja Challenge </a>  </span> 
        
        
        </div>
        <div className="item-gallery">
      
             <img src = {ninjat} id = "img-gallery"/>
         <span  className = "titleGallery">  <a href = "https://mega.nz/folder/HXpy2IzZ#Tf_JM5c_5Gdpxz7IHXOiNg"> Ninja:TTW </a> </span>  
        </div>
        <div className="item-gallery">
            
      
            <img src = {gamejam} id = "img-gallery"/>
          
            <span className = "titleGallery">  <a href = "https://globalgamejam.org/2021/games/are-you-sure-1"> Are you sure? </a></span>
   
        </div>
        <div className="item-gallery">
       
           <img src = {camouflageSystem} id = "img-gallery"/>
           
             <span className = "titleGallery"> <a href = "https://github.com/Danethree/CamouflageSystemAI"> Camouflage System </a> </span>
        </div>
        <div className="item-gallery">
            
          
           <img src = {project} id = "img-gallery"/>
          
             <span  className = "titleGallery"> <a href = "https://github.com/Danethree/ProjetoUnity3D">3D Project</a> </span>
         
        </div>
        <div className="item-gallery">
     
           <img src = {workshop} id = "img-gallery"/>
          
           
             <span  className = "titleGallery">   <a href = "https://danethree.itch.io/platform2d-prototypr"> Platform2D Prototype </a> </span>
        </div>
        <div className="item-gallery">
            
      
           <img src = {gameplay} id = "img-gallery"/>
          
          
         <span  className = "titleGallery">  <a href = "https://danethree.itch.io/infinite-driving-3d"> Infinite Driving 3D   </a> </span>
          

        </div>
      
        
          
            
     
        
         
   

   
        
 
  
      
         
         

     
    </div>
  )
}