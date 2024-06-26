import style from './Card.module.css';
export default function Card({className,cat, icone, descricao,children}){
  return(
    <section className={style.Card}>
      
    <div className={className} >
      <i class={`fa-${cat} fa-${icone}`}></i>
      <p className={style.Texto}>{descricao}</p>
      {children}
    </div>
    </section>
  )
}