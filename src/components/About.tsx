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
    <div>
         <div className = "aboutMe">
              
              <div className = "careerOne">
                      <h1>Unity Developer &amp;<br/>
                      
                  </h1> 
                      <h1 className = "careerTwo">Mobile Developer</h1> 
                      
              </div>
          
             
              <section className = "descriptionAboutMe">
                    <div id = "myPhotoDiv">
                    <img src = {profilePhoto} id = "myPhoto" className = "myPhoto" alt = "Foto de perfil de Daniela"/>
                    <p id = "description">My name is Daniela and I'm a software developer searching continuous improvement.
                    I am programming games personal projects  in C# with Unity 2 years and I am starting to develop applications with the library React to improve my software's delevolment skills.
          My great objective is to learn each more forms of software development to improve myself and discover more solutions of problems that
           will be appear.I love to programm games and I love the interactions forms that the player can have playing in your smartphone,
            that is why I am study very hard the mobile development, waiting that I can discover always  new possibilities with the technology
             world. I am science computer bachelor's degree and I am studying Software Engineering graduate studies currently. </p>
                    </div>
                   
                   </section>
          
                 </div>

                 <section className = "mySkills">
                    
                 
                    <h2 className = "datasheet">-&nbsp;Skills&nbsp;-</h2>
                    <h2 className = "datasheet">-&nbsp;Programming Languages&nbsp;-</h2>
                      <div className = "listOfBadges">
                      <ul className = "badges">
                       <li><img id = "badges"src = {csharplogo} alt = "C# programming language "/></li>  
                        <li><img id = "badges"src = {htmlfiveLogo} alt = "Hypertext Markup Language version 5"/></li> 
                        <li><img id = "badges"src = {cssthreeLogo} alt = "Stylesheet CSS3"/> </li> 
                        <li><img id = "badges"src = {javascriptLogo} alt = "Javascript programming language"/> </li> 
                        <li><img id = "badges"src = {kotlinLogo} alt = "Kotlin programming language "/> </li> 
                      </ul>
                      </div>
             
                       <h2 className = "datasheet">-&nbsp;Libraries&nbsp;-</h2>
                       <div className = "listOfBadges">
                       <ul className = "badges">
                         <li>  <img id = "badges"src = {reactJsLogo} alt = " React logo"/></li>
                         <li> <img id = "badges"src = {reactNativeLogo} alt = " React Native logo"/> </li>
                         </ul>
                       
                       
                        
                      </div>
             
                      <h2 className = "datasheet">-&nbsp;Engines&nbsp;-</h2>
                      <div className = "listOfBadges">
                            <img id = "badges"src = {unityLogo} alt = "Unity logo"/>
                      </div>
             
                      
                      
               
             
             
                    </section>
    </div>
   
  )
}