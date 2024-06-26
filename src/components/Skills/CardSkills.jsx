
import style from './CardSkills.module.css';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function CardSkills({titulo,children}){
  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:'1000',
   
    });

  },[])
    return (
      <div className={style.CardSkills} >
      
         <h3>{titulo}</h3>
        <div className={style.Box}>
          {children}
   

        </div>
      </div>
    );
}

