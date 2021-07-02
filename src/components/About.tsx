import profilePhoto from '../assets/.env.photos/daniela.png'
import unityLogo from '../assets/.env.photos/unity.svg'
import reactNativeLogo from "../assets/.env.photos/reactNative.svg"
import reactJsLogo from "../assets/.env.photos/reactJs.svg"
import csharplogo from "../assets/.env.photos/csharp.svg"
import htmlfiveLogo from "../assets/.env.photos/htmlfive.svg"
import cssthreeLogo from "../assets/.env.photos/cssthree.svg"
import javascriptLogo from "../assets/.env.photos/javascript.svg"
import kotlinLogo from "../assets/.env.photos/kotlin.svg"
import '../styles/about.css'
import gmail from "../assets/.env.photos/gmail.svg"
import telegram from "../assets/.env.photos/telegram.svg"
import github from "../assets/.env.photos/github.svg"
import linkedin from "../assets/.env.photos/linkedin.svg"
export function About(){
  return(
    <div className = "aboutMe">
              
    <div className = "careerOne">
            <p>Unity Developer &amp;<br/>
            
        </p> 
            <p className = "careerTwo">Mobile Developer</p> 
            
    </div>

   
    <section className = "descriptionAboutMe">
          <div id = "myPhotoDiv">
          <img src = {profilePhoto} className = "myPhoto" alt = "Foto de perfil de Daniela"/>
          </div>
         
         

          <h1 className = "datasheet" id = "aboutMe"> Ficha Técnica</h1>
          <span className = "lineTitle"></span>
          <h2 className = "datasheet">Formação:</h2>
          <p id = "description">Ciência da Computação</p>
          <h2 className = "datasheet">Linguagens de Programação:</h2>
          <div className = "badges">
            <img id = "badges"src = {csharplogo} alt = "Linguagem de programação C#"/>
            <img id = "badges"src = {htmlfiveLogo} alt = "Linguagem de Marcação HTML5"/>
            <img id = "badges"src = {cssthreeLogo} alt = "Folha de estilo CSS3"/> 
            <img id = "badges"src = {javascriptLogo} alt = "Folha de estilo CSS3"/> 
            <img id = "badges"src = {kotlinLogo} alt = "Linguagem de programação Kotlin"/> 
         </div>

          <h2 className = "datasheet">Bibliotecas:</h2>
          <div className = "badges">
            <img id = "badges"src = {reactJsLogo} alt = "Logotipo React"/>
          
            <img id = "badges"src = {reactNativeLogo} alt = "Logotipo React Native"/> 
         </div>

         <h2 className = "datasheet">Engines:</h2>
         <div className = "unityBadge">
               <img id = "unityBadge"src = {unityLogo} alt = "Logotipo unity"/>
         </div>

         <h2 className = "datasheet">Idiomas:</h2>
         <p  id = "description"><b>Inglês: </b> Nível intermediário</p>
         <p  id = "description"><b>Espanhol: </b> Nível básico</p>
         <span className = "lineTitle"></span>
         <h1 className = "datasheet" id = "contacts"> Redes sociais e contato:</h1>
         <div className = "badges">

             <a href = "danidaninpce3@gmail.com" >
             <img id = "badges"src = {gmail} alt = "danidaninpce3@gmail.com"/>
               </a> 

         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img id = "badges"src = {telegram} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img id = "badges"src = {github} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         <div className = "badges">
             <a href = "danidaninpce3@gmail.com" >
             <img id = "badges" src = {linkedin} alt = "danidaninpce3@gmail.com"/>
               </a> 
         </div>
         
    </section>

</div>
  )
}