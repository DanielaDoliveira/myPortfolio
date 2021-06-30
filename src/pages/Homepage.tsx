

import { MenuBar } from '../components/MenuBar';
import {About} from '../components/About'
import {MyFooter} from '../components/MyFooter'
import {Projects} from '../components/Projects'
import { UnityProjects } from '../components/UnityProjects';
export function Homepage()
{
  
    return(
     
        <div>
           <MenuBar/>
           <About/>
           <Projects/>
       
         <MyFooter/>
        </div>
    );
}