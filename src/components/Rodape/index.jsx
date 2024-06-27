import style from "./Rodape.module.css";
export default function Rodape() {
  return (
    <footer className={style.Rodape}>
      <div>
        <p>&copy;Todos os direitos reservados</p>
        <p>
          Developer: <span> <a 
        target="_blank"
        href="https://www.linkedin.com/in/lucineia-r-silva-frontend/"
        rel="noreferrer"
      >
      Luh Silva
      </a></span>
        </p>
      </div>
    </footer>
  );
}
