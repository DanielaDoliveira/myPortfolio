

import { MenuBar } from '../components/MenuBar';
import '../styles/about.scss'
import {MyFooter} from '../components/MyFooter'
export function Homepage()
{
   
    return(
       
        <div>
           <MenuBar/>
           <div className = "aboutMe">
              
                <div className = "careerOne">
                        <p>Unity Developer &amp;<br/>
                        
                    </p> 
                        <p className = "careerTwo">Mobile Developer</p> 
                        
                </div>
            </div>
           
         <MyFooter/>
        </div>
    );
}