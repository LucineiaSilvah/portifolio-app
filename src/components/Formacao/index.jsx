import Card from '../Cards';
import './Formacao.css';
import uni from '../../img/uni.jpg';
import alura from '../../img/Alura.jpg';
import udemy from '../../img/udemy.jpg';
export default function Formacao(){
  return(
    <section className='formacao'>
      <h2>Fomação Academica</h2>
    <div className='formacaoBox'>
      

    <Card className='cardMedio'
    descricao={'Gestão de TI'}
    >
      <img src={uni} alt="" />
      <p>Concluido(2023)</p>

    </Card>
    <Card className='cardMedio'
    descricao={'Desenvolvimento front-end'}
    >
      <img src={alura} alt="" />
      <p>Concluido(2023)</p>
    </Card>
    <Card className='cardMedio'
    descricao={'Desenvolvimento Web'}
    >
      <img src={udemy} alt="" />
      <p>Em Andamento</p>
    </Card>
    </div>
    </section>
  )
}