import profilePhoto from '../assets/.env.photos/daniela.png'


import '../styles/about.scss'

export function About(){
  return(
    <div>
         <div className = "aboutMe">
         
             
              <section className = "descriptionAboutMe">
                    <div id = "myPhotoDiv">
                    <img src = {profilePhoto} id = "myPhoto" className = "myPhoto" alt = "Foto de perfil de Daniela"/>
                    <p id = "description">My name is Daniela and I'm a game developer searching continuous improvement.
                    I am programming games personal projects  in C# with Unity 2 years and I am starting to develop applications with the library React to improve my software's delevolment skills.
          My great objective is to learn each more forms of software development to improve myself and discover more solutions of problems that
           will be appear.I love to programm games and I love the interactions forms that the player can have playing in your smartphone,
            that is why I am study very hard the mobile development, waiting that I can discover always  new possibilities with the technology
             world. I am science computer bachelor's degree and I am studying Software Engineering graduate studies currently. </p>
                    </div>
                   
                   </section>
          
                 </div>

             
    </div>
   
  )
}