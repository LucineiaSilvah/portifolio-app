import './Card.css';
export default function Card({className,cat, icone, descricao,children}){
  return(
    <div className={className} >
      <i class={`fa-${cat} fa-${icone}`}></i>
      <p>{descricao}</p>
      {children}
    </div>
  )
}