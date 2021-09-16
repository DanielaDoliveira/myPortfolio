import unityLogo from '../assets/.env.photos/unity.svg'
import reactNativeLogo from "../assets/.env.photos/reactNative.svg"
import reactJsLogo from "../assets/.env.photos/reactJs.svg"
import csharplogo from "../assets/.env.photos/csharp.svg"
import htmlfiveLogo from "../assets/.env.photos/htmlfive.svg"
import cssthreeLogo from "../assets/.env.photos/cssthree.svg"
import javascriptLogo from "../assets/.env.photos/javascript.svg"
export function MySkills()
{
  return(
    <div className = "aboutMe">
        <section className = "mySkills">
                    
                 
                    <h2 className = "datasheet">-&nbsp;Skills&nbsp;-</h2>
                    <h2 className = "datasheet">-&nbsp;Programming Languages&nbsp;-</h2>
                      <div className = "listOfBadges">
                      <ul className = "badges">
                       <li><img id = "badges"src = {csharplogo} alt = "C# programming language "/></li>  
                        <li><img id = "badges"src = {htmlfiveLogo} alt = "Hypertext Markup Language version 5"/></li> 
                        <li><img id = "badges"src = {cssthreeLogo} alt = "Stylesheet CSS3"/> </li> 
                        <li><img id = "badges"src = {javascriptLogo} alt = "Javascript programming language"/> </li> 
                      
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