import style from "./Redes.module.css";

const Redes = ({size}) => {
  return (
    <aside className={style.Redes}>
      <a className={size}
        target="_blank"
        href="https://www.linkedin.com/in/lucineia-r-silva-frontend/"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin" title="Linkedin"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/LucineiaSilvah"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-github" title="github"></i>
      </a>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5541992676801"
        rel="noreferrer"
      >
        <i class="fa-brands fa-square-whatsapp" title="whatsapp"></i>
      </a>
    </aside>
  );
};

export { Redes };
