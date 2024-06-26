import style from  './Sobre.module.css';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Sobre(){
  useEffect(()=>{
    AOS.init({
      duration:1500,
      delay:'1000',
  
    });

  },[])
  return(
    <section className={style.Sobre}>
    
      <h2>Sobre mim</h2>
        
    
      <div data-aos='fade-right'>
        
      <p>Olá Sou a Luh, tenho 32 anos e estou em transição de carreira. Sou Graduada em Gestão da Tecnologia da Informação na intituição de ensino Uniasselvi aqui do Parana, Venho do ramo de comercial onde atuava como Subgerente a mais de 10 anos, há 3 anos resolvi sair da minha zona de conforto e tentar algo novo, e aqui estou ☺...</p>
      <p>Sou uma Profissional disciplinada e responsavel, devido a minha experiência anterior no mercado sou acostumada a trabalhar em equipe e gosto muito de ajudar os membros assim como aprender, quem me conhece diz que sou muito paciente e facil de se relacionar.</p>
      <p>Tenho conhecimentos em HTML, CSS, JAVASCRIPT,REACT BOOTSTRAP,SQL e estou em busca de aprender cada dia mais sobre as tecnologias necessarias para meu conhecimento tecnico, e assim poder contribuir e crescer junto a empresa.</p>
      </div>
    </section>
  )
}