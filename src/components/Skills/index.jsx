
import Card from '../Cards';
import CardSkills from './CardSkills';
import './Skills.css';
export default function Skills(){
  
    return (
      <section className='skills'>
        <h2>Skills</h2>
         <CardSkills 
         titulo='hard'
         >
         <Card cat='brands' icone='html5' descricao='html5'/>
         <Card cat='brands' icone='css3' descricao='CSS3'/>
         <Card cat='brands' icone='js' descricao='javascript'/>
         <Card cat='brands' icone='bootstrap' descricao='bootstrap'/>
         <Card cat='brands' icone='react' descricao='react'/>
         <Card cat='brands' icone='php' descricao='php'/>
      
         </CardSkills>
      
         <CardSkills titulo='Soft'>
         <Card cat='solid' icone='laptop-code' descricao='codar'/>
         <Card cat='solid' icone='guitar' descricao='musica'/>
         <Card cat='solid' icone='clock-rotate-left' descricao='Agilidade'/>
         <Card cat='solid' icone='magnifying-glass' descricao='Curiosidade'/>
         <Card cat='solid' icone='people-group' descricao='trabalho em equipe'/>
         <Card cat='solid' icone='shuffle' descricao='flexibilidade'/>
         <Card cat='solid' icone='face-smile-beam' descricao='Paciência'/>
         
         </CardSkills>
       
      </section>
    );
}

