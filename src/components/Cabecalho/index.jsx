import Menu from "../Menu";
import style from './Cabecalho.module.css'

export default function Cabecalho(){

  return(
    <header className={style.Cabecalho}>
      <h1>Lucineia </h1>
      
      <Menu/>
    </header>
  )
}