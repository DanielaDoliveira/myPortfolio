

import { MenuBar } from '../components/MenuBar';
import {About} from '../components/About'
import {MyFooter} from '../components/MyFooter'
import {Projects} from '../components/Projects'
import '../styles/about.scss'

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