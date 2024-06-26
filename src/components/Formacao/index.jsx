import Card from '../Cards';
import style from  './Formacao.module.css';
import uni from '../../img/uni.jpg';
import alura from '../../img/Alura.jpg';
import udemy from '../../img/udemy.jpg';
export default function Formacao(){
  return(
    <section className={style.Formacao}>
      <h2>Fomação Academica</h2>
    <div className={style.Box}>
      

    <Card className={style.Medio}
    descricao={'Gestão de TI'}
    >
      <img src={uni} alt="" />
      <p>Concluido(2023)</p>

    </Card>
    <Card className={style.Medio}
    descricao={'Desenvolvimento front-end'}
    >
      <img src={alura} alt="" />
      <p>Concluido(2023)</p>
    </Card>
    <Card className={style.Medio}
    descricao={'Desenvolvimento Web'}
    >
      <img src={udemy} alt="" />
      <p>Em Andamento</p>
    </Card>
    </div>
    </section>
  )
}