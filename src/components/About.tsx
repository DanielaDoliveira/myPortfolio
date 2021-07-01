import profilePhoto from '../assets/.env.photos/daniela.png'
import unityLogo from '../assets/.env.photos/unity.svg'
import reactNativeLogo from "../assets/.env.photos/reactNative.svg"
import reactJsLogo from "../assets/.env.photos/reactJs.svg"
import csharplogo from "../assets/.env.photos/csharp.svg"
import htmlfiveLogo from "../assets/.env.photos/htmlfive.svg"
import cssthreeLogo from "../assets/.env.photos/cssthree.svg"
import javascriptLogo from "../assets/.env.photos/javascript.svg"
import kotlinLogo from "../assets/.env.photos/kotlin.svg"
import '../styles/about.scss'

import gmail from "../assets/.env.photos/gmail.svg"
import telegram from "../assets/.env.photos/telegram.svg"
import github from "../assets/.env.photos/github.svg"
import linkedin from "../assets/.env.photos/linkedin.svg"
export function About(){
  return(
    <div className = "aboutMe" id = "aboutMe">
              
    <div className = "careerOne">
            <p>Unity Developer &amp;<br/>
            
        </p> 
            <p className = "careerTwo">Mobile Developer</p> 
            
    </div>

   
    <section className = "descriptionAboutMe">
          <img src = {profilePhoto} className = "myPhoto"alt = "Foto de perfil de Daniela"/>
         

          <h1 className = "datasheet" id = "datasheet"> Ficha Técnica</h1>
          <span className = "lineTitle"></span>
          <h2 className = "titles">Formação:</h2>
          <p>Ciência da Computação</p>
          <h2 className = "titles">Linguagens de Programação:</h2>
          <div className = "badges">
            <img src = {csharplogo} alt = "Linguagem de programação C#"/>
            <img src = {htmlfiveLogo} alt = "Linguagem de Marcação HTML5"/>
            <img src = {cssthreeLogo} alt = "Folha de estilo CSS3"/> 
            <img src = {javascriptLogo} alt = "Folha de estilo CSS3"/> 
            <img src = {kotlinLogo} alt = "Linguagem de programação Kotlin"/> 
         </div>

          <h2 className = "titles">Bibliotecas:</h2>
          <div className = "badges">
            <img src = {reactJsLogo} alt = "Logotipo React"/>
          
            <img src = {reactNativeLogo} alt = "Logotipo React Native"/> 
         </div>

         <h2 className = "titles">Engines:</h2>
         <div className = "badges">
               <img src = {unityLogo} alt = "Logotipo unity"/>
         </div>
         <h2 className = "titles">Idiomas:</h2>
         <p><b>Inglês: </b> Nível intermediário</p>
         <p><b>Espanhol: </b> Nível básico</p>
         <span className = "lineTitle"></span>
         <h1 className = "datasheet" id = "contacts"> Redes sociais e contato:</h1>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img src = {gmail} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img src = {telegram} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img src = {github} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img src = {linkedin} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         
    </section>

</div>
  )
}