import '../styles/footerComponent.scss'
import gmail from "../assets/.env.photos/gmail.png"


import gitmark from "../assets/.env.photos/gitmark.png"
import linkedinmark from "../assets/.env.photos/linkedinmark.png"
import telegrammark from "../assets/.env.photos/telegrammark.png"
export function MyFooter()
{
const copyright = `(2021) Created by Daniela Fialho.${'\n'}All Rights Reserved${'\n'}`;
  return(
    <footer className = "myFooterArea" >
      <div className = "paragraph">   
            <h5>
            <strong>{copyright}</strong>
            </h5> 
         
       </div>
      <div>
      <h5 id = "informations">CONTACT/FOLLOW ME!</h5>
      <ul className ="contactBadges" id = "contacts">
   
      <li>
      <a href  = "https://github.com/Danethree" >
      <img  
        className ="badgesInFooter"
        src = {gitmark} 
        alt = "Foto de perfil de Daniela"
       />
      </a>
       
        </li>

        <li>
        <a href = "https://www.linkedin.com/in/daniela-fialho-d-oliveira-479b53163/">
          <img className = "badgesInFooter"id = "linkMark"src = {linkedinmark} alt = " Perfil de Daniela"/>
        </a>
        </li>
      
        <li>
        <a href = "https://t.me/Danethree"> 
        <img className = "badgesInFooter"id = "linkMark"src = {telegrammark} alt = "Telegram de Daniela"/>
         </a>
        </li>

        
        <li>
        <a href = "mailto:danidaninpce3@gmail.com?subject=Hello%20again"> 
        <img className = "badgesInFooter"id = "linkMark"src = {gmail} alt = "Email de de Daniela"/>
         </a>
        </li>
       
        </ul>
      </div>
      
     
      
       
    </footer>

  )
}