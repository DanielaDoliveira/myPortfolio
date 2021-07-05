
import '../styles/rProjects.scss'

import {useState} from 'react';
import { ReactProjects } from './ReactProjects';
import { ReactNativeProjects } from './ReactNativeProjects';


export function Rprojects()
{

  const [isWeb,setIsWeb] = useState(false)
  const [isMobile,setIsMobile] = useState(false)
  const [isAll,setIsAll] = useState(true)
  function handleClickWebProjects()
  {
      setIsAll(false);
      setIsWeb(true);
      setIsMobile(false);

  }
  function handleClickMobileProjects()
  {
     setIsAll(false);
      setIsWeb(false);
      setIsMobile(true);

  } function handleClickAllProjects()
  {
     setIsAll(true);
      setIsWeb(false);
      setIsMobile(false);

  }
  return(

    <div className="RNProjects">
      
      <div className = "DivUnityProjects">
     
            < div className = "reactBar">
                <div className = "navReact">
                    <ul className = "ultechnologyButtons">
                        <li className = "submenu"
                                onClick = {handleClickAllProjects}
                            >&nbsp;All &nbsp;
                        </li>
                        &nbsp;| &nbsp;
                        <li className = "submenu"
                            onClick = {handleClickWebProjects}
                        >&nbsp;Web</li>
                        &nbsp;| &nbsp;
                          
                            <li className = "submenu"
                             onClick = {handleClickMobileProjects}>
                                &nbsp;Mobile
                                </li>
                     </ul>
               </div>
            </div> 
         <div className = "reactProjects">
     
             
             {isWeb &&(
                  <ul id = "reactList">
                        <li>
                        <ReactProjects/>
                          </li>
                  </ul>
                 

             )}
             {isMobile &&(
               <ul id = 'reactList'>
                 <li> <ReactNativeProjects/></li>
               </ul>

             )}
                {isAll &&(
               <div>
                 <ul  id = "reactList">
                   <li> <ReactNativeProjects/> </li>
                   <li> <ReactProjects/></li>
                 </ul>

               
                 </div>

             )}
           
           
            
            
      </div>
      
     
         </div>
           
      </div>

  )
}