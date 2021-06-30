

import { MenuBar } from '../components/MenuBar';
import {About} from '../components/About'
import {MyFooter} from '../components/MyFooter'
import {Projects} from '../components/Projects'

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