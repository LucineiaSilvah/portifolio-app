import './Botao.css';
export default function Botao({cor,children}){
  return(
<button className="btn" style={{backgroundColor:cor}}>
  {children}
</button>

  )
}