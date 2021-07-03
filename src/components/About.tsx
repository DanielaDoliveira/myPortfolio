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
    <div className = "aboutMe">
              
    <div className = "careerOne">
            <p>Unity Developer &amp;<br/>
            
        </p> 
            <p className = "careerTwo">Mobile Developer</p> 
            
    </div>

   
    <section className = "descriptionAboutMe">
          <div id = "myPhotoDiv">
          <img src = {profilePhoto} id = "myPhoto" className = "myPhoto" alt = "Foto de perfil de Daniela"/>
          </div>
         
         

          <h1 className = "datasheet" id = "aboutMe"> About Me</h1>
          <span className = "lineTitle"></span>
          <h2 className = "datasheet">Degree:</h2>
          <p id = "description">Science Computer</p>
          <h2 className = "datasheet">Programming Languages:</h2>
         <div className = "listOfBadges">
         <ul className = "badges">
          <li><img id = "badges"src = {csharplogo} alt = "C# programming language "/></li>  
           <li><img id = "badges"src = {htmlfiveLogo} alt = "Hypertext Markup Language version 5"/></li> 
           <li><img id = "badges"src = {cssthreeLogo} alt = "Stylesheet CSS3"/> </li> 
           <li><img id = "badges"src = {javascriptLogo} alt = "Javascript programming language"/> </li> 
           <li><img id = "badges"src = {kotlinLogo} alt = "Kotlin programming language "/> </li> 
         </ul>
         </div>

          <h2 className = "datasheet">Libraries:</h2>
          <div className = "listOfBadges">
          <ul className = "badges">
            <li>  <img id = "badges"src = {reactJsLogo} alt = " React logo"/></li>
            <li> <img id = "badges"src = {reactNativeLogo} alt = " React Native logo"/> </li>
            </ul>
          
          
           
         </div>

         <h2 className = "datasheet">Engines:</h2>
         <div className = "listOfBadges">
               <img id = "badges"src = {unityLogo} alt = "Unity logo"/>
         </div>

         <h2 className = "datasheet">Languages:</h2>
         <p  id = "description"><b>English: </b> Intermediate</p>
         <p  id = "description"><b>Spanish: </b> Basic</p>
        
        
     
         
    </section>

</div>
  )
}