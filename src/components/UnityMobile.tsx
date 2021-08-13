
import bee from "../assets/.env.photos/bee.png"
import gyromaze from "../assets/.env.photos/gyroScreen01.jpg"
import ninja from "../assets/.env.photos/ninja.png"
import "../styles/newUnityCss.scss"
export function UnityMobile()
{
    return (
      
 <div className = ".gallery-container">

     <div className = "item-gallery">
      <a href = "https://play.google.com/store/apps/details?id=com.DanielaFialho.ProjetoBeeVersao">
        <img src = {bee} className = "img-galleryMobile"/>
    </a> 
     </div>  
     <div className = "item-gallery">
      <a href = "https://play.google.com/store/apps/details?id=com.DanielaFialho.ProjetoBeeVersao">
        <img src = {gyromaze} className = "img-galleryMobile"/>
      </a>
     </div>

   
    
     
 



 </div>
      
     
    )
}