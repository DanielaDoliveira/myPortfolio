

import { MenuBar } from '../components/MenuBar';
import {About} from '../components/About'
import {MyFooter} from '../components/MyFooter'

export function Homepage()
{
  
    return(
     
        <div>
           <MenuBar/>
           <About/>
        
      
         <MyFooter/>
        </div>
    );
}