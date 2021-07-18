
import bee from "../assets/.env.photos/bee.png"

import ninja from "../assets/.env.photos/ninja.png"
import "../styles/newUnityCss.scss"
export function UnityMobile()
{
    return (
      
 <div className = ".gallery-container">
     <div className = "item-gallery">
     <img src = {bee} className = "img-galleryMobile"/>
            
   <span className = "titleGalleryMobile"><a href = "https://play.google.com/store/apps/details?id=com.DanielaFialho.ProjetoBeeVersao"> Bee </a> </span>
     </div>  
   
    
     
 



 </div>
      
     
    )
}