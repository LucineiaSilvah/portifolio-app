
import Botao from '../Btn';
import { Redes } from '../Redes';
import style from './Contato.module.css';

const Contato = () => {
  const acao = "https://api.staticforms.xyz/submit";
  const valor ="https://portifolio-app-mu.vercel.app";
  return (
    <section className={style.Contato}>
     <h2>Contato</h2>
      <form className={style.Form}  action={acao} method="POST">
        <div className={style.Texto}>
          <p>Que bater um papo comigo?</p>
          <p>Entre em contato!!</p>
         </div>
     <div className={style.Center}>
             <input type="hidden" name="accessKey" value="1172f2e6-1454-47eb-9ffa-526735fdbf6e"/> 
             <input type="hidden" name="subject" value="Contact us from - example.com" /> 
             <input type="hidden" name="replyTo" value="@"/> 
             <input type="hidden" name="redirectTo" value={valor}/> 
            
 
              <label for="nome">Nome</label>
              <input
                required
                type="text"
                name="name"
                id="nome"
                placeholder="seu nome aqui..."
              />
              <label for="email">E-mail</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="seuemail@gmail.com"
              />
              <label for="assunto" >Assunto</label>
              <input
                required
                type="text"
                name="assunto"
                id="assunto"
                placeholder="digite aqui seu assunto"
              />
              <textarea

               name="message" 
                rows="10"
                cols=""
                placeholder=" Digite aqui a sua Mensagem"
              ></textarea>
              <Botao>
             
              enviar mensagem
              </Botao>
             
     </div>
           <Redes size={style.Size}/>
    </form>
     
    </section>
  );
}

export  {Contato};
