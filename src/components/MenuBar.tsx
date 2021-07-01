
import '../styles/menu.scss'
import React, {useState} from 'react';
import {Switch,Router,Link} from 'react-router-dom';
export function MenuBar() {

  const [click,setClick] = useState(true);
  const handleClick = ()=>setClick(!click);
  function handleClickDataSheet()
  {

  }
    return(
     <nav>
       
       <label className = "logo"> Daniela Fialho
     
       
       </label>
       <div className="menu-icon" onClick={handleClick}>
      
      <i className={click?"fas fa-bars":"fas fa-times"} id = "threebars"/>
        </div>
  
      
            <ul className = {click?'before':'after'}>
                    <li> <a href = "#datasheet"> Sobre mim </a></li> 
                      <li> <a href = "#myProjects"> Projetos</a></li>
                      <li>  <a href = "#contacts">Contatos</a> </li>
                      <li>  <a href = "#">Certificados</a> </li>
                </ul>
  
     </nav>
    )
}
