import '../styles/footerComponent.scss'
import gmail from "../assets/.env.photos/gmail.svg"
import telegram from "../assets/.env.photos/telegram.svg"
import github from "../assets/.env.photos/github.svg"
import linkedin from "../assets/.env.photos/linkedin.svg"
import profilePhoto from '../assets/.env.photos/daniela.png'
import {About} from '../components/About'
import gitmark from "../assets/.env.photos/gitmark.png"
import linkedinmark from "../assets/.env.photos/linkedinmark.png"
import telegrammark from "../assets/.env.photos/telegrammark.png"
export function MyFooter()
{
const copyright = `(2021) Criado por Daniela Fialho.${'\n'}Todos os direitos reservados${'\n'}`;
  return(
    <footer className = "myFooterArea" >
      <div className = "paragraph">   
            <h6>
            <strong>{copyright}</strong>
            </h6> 
         
       </div>
      <div>
      <ul className ="contactBadges" >
       
        <li>
      
        <img  className ="badgesInFooter"src = {gitmark} alt = "Foto de perfil de Daniela"/>
        </li>

        <li>
        <img className = "badgesInFooter"id = "linkMark"src = {linkedinmark} alt = "Foto de perfil de Daniela"/>
        </li>
      
        <li>
        <img className = "badgesInFooter"id = "linkMark"src = {telegrammark} alt = "Foto de perfil de Daniela"/>
        </li>
       
        </ul>
      </div>
      
     
      
       
    </footer>

  )
}