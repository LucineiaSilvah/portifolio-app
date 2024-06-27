import { Redes } from '../Redes';
import style from  './Banner.module.css';
export default function Banner(){
  return(
    <>
    <div className={style.Banner}>
    
    <div className={style.Imagem}></div>

    <div className={style.Descricao}>
         <h2 >Olá, Me chamo Lucineia Silva e sou Desenvolvedora Front-End</h2>
        <div className={style.Texto}>
          <p>" Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema ".</p><span > Thales Valentim</span>
        </div>
        <div>
          <Redes/>
        </div>
    </div> 
    </div>
    
    
    </>
  )
}