import Botao from '../Btn';
import { Redes } from '../Redes';
import style from './Contato.module.css';

const Contato = () => {
  return (
    <section className={style.Contato}>
     <h2>Contato</h2>
     <form className={style.Form} >
     
      <div className={style.Texto}>
      <p>Que bater um papo comigo?</p>
      <p>Entre em contato!!</p>
        
      </div>

     <div className={style.Center}>

      <label for="nome">Nome</label>
      <input type="text" placeholder="seu nome aqui" required></input>
      <label for="email">E-mail</label>
      <input type="email" placeholder="seu email aqui" required></input>
      <Botao cor={style.Cor}>Enviar</Botao>
     </div>
     <Redes size={style.Size}/>
    </form>
    </section>
  );
}

export  {Contato};
