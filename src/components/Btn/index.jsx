import './Botao.css';
export default function Botao({children}){
  return(
<button className="btn">
  {children}
</button>

  )
}