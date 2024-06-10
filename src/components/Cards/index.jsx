import './Card.css';
export default function Card({cat, icone, descricao}){
  return(
    <div className='card'>
      <i class={`fa-${cat} fa-${icone}`}></i>
      <p>{descricao}</p>
    </div>
  )
}