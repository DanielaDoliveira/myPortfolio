
import { MenuBar } from './MenuBar';
import {MyFooter} from './MyFooter'
import '../styles/uProjects.scss'
import { UnityProjectsContent } from './UnityProjectsContent';


export function UnityProjects() {
    


  return(
    <div className = "UnityProjects">
           <MenuBar/>
     <UnityProjectsContent/>
      <MyFooter/>
      </div>
  );

}