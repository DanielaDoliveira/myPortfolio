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

export function About(){
  return(
    <div className = "aboutMe">
              
    <div className = "careerOne">
            <p>Unity Developer &amp;<br/>
            
        </p> 
            <p className = "careerTwo">Mobile Developer</p> 
            
    </div>

   
    <section className = "descriptionAboutMe">
          <img src = {profilePhoto} className = "myPhoto"alt = "Foto de perfil de Daniela"/>
          <h1 className = "datasheet"> Ficha Técnica</h1>
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

          <h2 className = "titles">Frameworks:</h2>
          <div className = "badges">
            <img src = {reactJsLogo} alt = "Logotipo React"/>
            <img src = {unityLogo} alt = "Logotipo unity"/>
            <img src = {reactNativeLogo} alt = "Logotipo React Native"/> 
         </div>

         <h2 className = "titles">Idiomas:</h2>
         <p><b>Inglês: </b> Nível intermediário</p>
         <p><b>Espanhol: </b> Nível básico</p>

         
    </section>

</div>
  )
}