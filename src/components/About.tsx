import profilePhoto from '../assets/.env.photos/daniela.jpg'


import '../styles/about.scss'

export function About(){
  return(
    <div>
         <div className = "aboutMe">
         
             
              <section className = "descriptionAboutMe">
                    <div id = "myPhotoDiv">
                    <img src = {profilePhoto} id = "myPhoto" className = "myPhoto" alt = "Foto de perfil de Daniela"/>
                    <p id = "description">My name is Daniela and I am passion to learn. Programming is a great passion 
                    and games is a perfect software that allows me to challenge myself to improve in my learn. 
                  <br/>  <br/>  When I am not programming I love to play games and drawing and when I have opportunity, to visit 
                    new places. I love to learn new things and venture out in different places.<br/>  <br/> I usually meditate about
                     each experience that I live, and I usually think about how the experiences are create and how the
                      people create memories with that ones that they love.  </p>
                    </div>
                   
                   </section>
          
                 </div>

             
    </div>
   
  )
}