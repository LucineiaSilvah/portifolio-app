
import './CardSkills.css';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function CardSkills({titulo,children}){
  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:'1000',
      mirror:'true'
    });

  },[])
    return (
      <div className='cardSkills' data-aos='fade-up'>
      
         <h3>{titulo}</h3>
        <div className='boxCard'>
          {children}
        {/* <Card icone={'html5'} descricao='html5'/>
        <Card icone='css3' descricao='css3'/>
        <Card icone='js' descricao='javascript'/>
        <Card icone='bootstrap' descricao='bootstrap'/>
        <Card icone='react' descricao='react'/>
        <Card icone='php' descricao='php'/> */}

        </div>
      </div>
    );
}

