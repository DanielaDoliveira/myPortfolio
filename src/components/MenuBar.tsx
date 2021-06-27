
import '../styles/menu.scss'
import React, {useState} from 'react';

export function MenuBar() {

  const [click,setClick] = useState(true);
  const handleClick = ()=>setClick(!click);
    return(
     <nav>
       
       <label className = "logo"> Daniela Fialho
     
       
       </label>
       <div className="menu-icon" onClick={handleClick}>
      
      <i className={click?"fas fa-bars":"fas fa-times"} id = "threebars"/>
        </div>
  
      
            <ul className = {click?'before':'after'}>
                    <li> <a href = "#"> Sobre mim </a></li> 
                      <li> <a href = "#"> Projetos</a></li>
                      <li>  <a href = "#">Contatos</a> </li>
                      <li>  <a href = "#">Certificados</a> </li>
                </ul>
  
     </nav>
    )
}
