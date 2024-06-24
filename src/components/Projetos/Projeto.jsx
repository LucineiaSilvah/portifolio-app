import './Projeto.css';


import Botao from '../Btn';
export default function Projeto({imagem,titulo,descricao,tech,repo,demo}){
  

  return(
    <div className="projeto"> 
       <img src={imagem} key={titulo} alt={imagem}/>

      <div className="descricao">
        <div>

    <p>{titulo}</p>
       <p>tipo projeto</p>
        </div>
   
      
      <a href={demo} target="_blank" rel="noopener noreferrer">
        <Botao>
          demo
        </Botao>
      </a>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        <Botao>
      Repo
        </Botao>
      </a>
    
      </div>

    </div>
  )
}