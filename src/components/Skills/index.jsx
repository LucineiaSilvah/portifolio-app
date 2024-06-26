import style from'./Skills.module.css';

import Card from '../Cards';

import CardSkills from './CardSkills';

export default function Skills(){
  
    return (
      <section className={style.Skills}>
        <h2>Skills</h2>
        <div className={style.Box}>

         <CardSkills titulo='hard'
         >
         <Card className='card' cat='brands' icone='html5' descricao='html5'/>
         <Card className='card' cat='brands' icone='css3' descricao='CSS3'/>
         <Card className='card' cat='brands' icone='js' descricao='javascript'/>
         <Card className='card' cat='brands' icone='bootstrap' descricao='bootstrap'/>
         <Card className='card' cat='brands' icone='react' descricao='react'/>
         <Card className='card' cat='brands' icone='php' descricao='php'/>
      
         </CardSkills>
      
         <CardSkills titulo='Soft'>
         <Card className='card' cat='solid' icone='laptop-code' descricao='codar'/>
    
         <Card className='card' cat='solid' icone='clock-rotate-left' descricao='Agilidade'/>
         <Card className='card' cat='solid' icone='magnifying-glass' descricao='Curiosidade'/>
         <Card className='card' cat='solid' icone='people-group' descricao='trabalho em equipe'/>
         <Card className='card' cat='solid' icone='shuffle' descricao='flexibilidade'/>
         <Card className='card' cat='solid' icone='face-smile-beam' descricao='Paciência'/>
         
         </CardSkills>
        </div>
       
      </section>
    );
}

