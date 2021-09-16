

import { MenuBar } from '../components/MenuBar';
import {About} from '../components/About'
import {MyFooter} from '../components/MyFooter'
import {Projects} from '../components/Projects'
import { MyDescription } from '../components/MyDescription';
import { MySkills } from '../components/MySkills';

export function Homepage()
{
  
    return(
     
        <div>
           <MenuBar/>
           <MyDescription/>
           <About/>

         
           <Projects/>
           <MySkills/>
           <MyFooter/>
      
        </div>
    );
}