
import '../styles/menu.scss'


export function MenuBar() {
  const menuName = ' Menu  ▼'
    return(
     <div className = "bar">
       <div className = "logo"><h1>Daniela Fialho</h1>
       
            <ul className = "menuTop">
              <li><a href = "#" className = "top">  {menuName} </a> 
                <ul>
                    <li> <a href = "#"> Sobre mim </a></li> 
                      <li> <a href = "#"> Projetos</a></li>
                      <li>  <a href = "#">Contatos</a> </li>
                      <li>  <a href = "#">Certificados</a> </li>
                </ul>
              </li>
            </ul>
        
       
       
       
       </div>
      

            
        
     </div>
    )
}
