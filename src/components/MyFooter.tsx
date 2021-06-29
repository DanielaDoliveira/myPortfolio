import '../styles/footerComponent.scss'
import gmail from "../assets/.env.photos/gmail.svg"
import telegram from "../assets/.env.photos/telegram.svg"
import github from "../assets/.env.photos/github.svg"
import linkedin from "../assets/.env.photos/linkedin.svg"
import profilePhoto from '../assets/.env.photos/daniela.png'
import {About} from '../components/About'
export function MyFooter()
{

  return(
    <footer className = "myFooterArea" >
      <div className = "paragraph">   
             <strong>2021 - Criado por Daniela Fialho D'Oliveira. Todos os direitos reservados</strong>
       </div>
      
       
    </footer>

  )
}