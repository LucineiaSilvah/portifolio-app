/* eslint-disable jsx-a11y/anchor-is-valid */
import Botao from '../Btn';
import style from './Menu.module.css';
import { useState } from "react";
export default function Menu(){
   const [active, setMode] = useState(false);
   const ToggleMode = () => {
     setMode(!active);
   };
  return(
   <>
   <span  className={style.Icon}>
   <i class="fa-solid fa-bars" onClick={ToggleMode}></i>
   </span>
   <nav className={style.Menu} >
      <ul className="Menu">
     
        <li>
           <a href="#">Sobre Mim </a>
        </li>
        <li>
           <a href="#">Skills </a>
        </li>
        <li>
           <a href="#">Hobbies </a>
        </li>
        <li>
           <a href="#">Formação </a>
        </li>
        <li>
           <a href="#">Projetos </a>
        </li>
        <li>
           <Botao>
            Contate-me
           </Botao>
        </li>
      </ul>
   </nav>
   </>
  )
}