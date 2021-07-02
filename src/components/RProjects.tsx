
import '../styles/rProjects.scss'
import plantmanager from "../assets/.env.photos/plantmanager.png"


export function Rprojects()
{
  
  return(

    <div className="RNProjects">
      
      <div className = "DivUnityProjects">
        <h1 className= "datasheet">React Native Projects:</h1>
      
            <ul id = "unityList">

            <li>
           
          <a href = "https://github.com/Danethree/plantManager">
          <img src = {plantmanager} id = "projectimgPlant"/>
            </a> <p>PlantManager <br/> Android and IOS</p> 
            </li>
            </ul>
      </div>
    </div>
  )
}