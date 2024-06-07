/* eslint-disable jsx-a11y/anchor-is-valid */
import Botao from '../Btn';
import './Menu.css';
export default function Menu(){
  return(
   <nav className="menu">
      <ul>
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

  )
}