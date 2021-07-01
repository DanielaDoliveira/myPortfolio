
import { MenuBar } from '../components/MenuBar'
import { MyFooter } from '../components/MyFooter'
import '../styles/rProjects.scss'
import plantmanager from "../assets/.env.photos/plantmanager.png"
import { Button } from '../components/Button'
import { useHistory } from "react-router-dom"
export function Rprojects()
{
  const buttonBack  = "🢀";
  const history = useHistory();
  function handleClickBack()
  {
    history.push("/");
  }
  return(

    <div className="RNProjects">
        <MenuBar/>

        <div className = 'secondDivRNProjects'>
        <h1 className= "titles">Projetos React Native</h1>
        <ul className = "gallery">
          <li>
          <img src = {plantmanager} className = "projectimg"alt = "App Plantmanager "/>
              <p className = "subtitle">PlantManager</p>
              <p>Android e IOS</p>
          </li>
         
          
    </ul>
        </div>
        <Button
        onClick = {handleClickBack}>
        {buttonBack}
      </Button>
        <MyFooter/>
    </div>
  )
}