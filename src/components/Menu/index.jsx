/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Botao from '../Btn';
import style from './Menu.module.css';

export default function Menu(){
const [ativo,setMode] = useState(false)
 function meuEvento(){

   setMode(!ativo);

 }

  return(
   <>
   <span  className={style.Icon}>
   <i class="fa-solid fa-bars" onClick={meuEvento}></i>
   </span>
   <nav className={style.Bar}>
      <ul className={ativo? style.Menu.open : style.Menu} >
     
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