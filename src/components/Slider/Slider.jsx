import React from "react";
import Slider from "react-slick";
import Projeto from "../Projetos/Projeto";

import img1 from "../assets/imgProjetos/petshop.png";
import img2 from "../assets/imgProjetos/ong.jpg";
import img3 from "../assets/imgProjetos/ang-pro.png";
import img4 from "../assets/imgProjetos/cadastro.jpg";
import img5 from "../assets/imgProjetos/ang-pro.png";
import img6 from "../assets/imgProjetos/age.png";
import img7 from "../assets/imgProjetos/filmes.png";
import img8 from "../assets/imgProjetos/cadastro.jpg";
import img9 from "../assets/imgProjetos/crud.png";
import img10 from "../assets/imgProjetos/clima.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const imageUrls = [img1,img2,img3];
  const projetos = [
    {
      destaque: [
        {
          imagem:"{img1}",
          titulo: "Só Amores Petshop",
          descricao: "Projeto Pessoal",
          tech: "Techs:HTML5 | CSS3 | REACT",
          repo: "https://github.com/LucineiaSilvah/petshop",
          demo: "https://petshop-sooty.vercel.app/",
        },
        {
          imagem: "{ img2 }",
          titulo: "Ipsom Ong",
          descricao: "Projeto Pessoal",
          tech: "Techs:HTML5 | CSS3 | REACT",
          repo: "https://github.com/LucineiaSilvah/ong",
          demo: "https://ong-beta.vercel.app/",
        },
        {
          imagem: "{ img3 }",
          titulo: "Mortal Figther",
          descricao: "Challange DIO Modelo blog",
          tech: "Techs:TS|ANGULAR|CSS",
          repo: "https://github.com/LucineiaSilvah/angular-blog",
          demo: "https://angular-blog-rust-three.vercel.app/",
        },
        {
          imagem: '{ img4 }',
          titulo: "Sistema de Cadastro",
          descricao: "Projeto Pessoal",
          tech: "Techs:PHP|HTML|CSS| MYSQL| APACHE",
          repo: "https://github.com/LucineiaSilvah/crud-php",
          demo: "http://sistemacadastro.kesug.com",
        },
        {
          imagem: "/imgProjetos/bz.png",
          titulo: "Projeto Buzzfeed",
          descricao: "Projeto estilo buzzfeed",
          tech: "Techs:TS|ANGULAR|CSS",
          repo: "https://github.com/LucineiaSilvah/angular-buzzfeed",
          demo: "https://angular-buzzfeed-three.vercel.app/",
        },
        {
          imagem: "/imgProjetos/crud.png",
          titulo: "Lista tarefas em React",
          descricao: "LISTA DE TAREFA SIMPLES EM REACT",
          tech: "Techs:HTML|REACT|CSS",
          repo: "https://github.com/LucineiaSilvah/lista-de-tarefas",
          demo: "https://lista-de-tarefas-two-cyan.vercel.app/",
        },
        {
          imagem: "/imgProjetos/decode.png",
          titulo: "Decodificador de texto",
          descricao: "Challange Alura Codificador",
          tech: "Techs: HTML CSS JS |FIGMA TRELLO",
          repo: "https://github.com/LucineiaSilvah/Challange-Codificador-Decodificador/tree/master",
          demo: "https://lucineiasilvah.github.io/Challange-Codificador-Decodificador/",
        },
        {
          imagem: "/imgProjetos/checkList.png",
          titulo: "Lista de Tarefas",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/to-go-list-main/tree/master/to-go-list-main",
          demo: "https://lista-tarefas-luh.netlify.app/",
        },
        {
          imagem: "/imgProjetos/hora.png",
          titulo: "Horas do Dia",
          descricao: "Challange Guanabara",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/horasdodia/tree/master",
          demo: "https://wondrous-seahorse-8b368c.netlify.app/",
        },
        {
          imagem: "/imgProjetos/geek (1).png",
          titulo: "E-commerce",
          descricao: "Challange Alura geek",
          tech: "Techs: HTML CSS JS |FIGMA TRELLO",
          repo: "https://github.com/LucineiaSilvah/alura-geek",
          demo: "https://alurageekv1.netlify.app/",
        },
        {
          imagem: "/imgProjetos/gametech.png",
          titulo: "E-commerce game tech",
          descricao: "Projeto pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/loja-tech",
          demo: "https://gametechecommerce.netlify.app/",
        },
        {
          imagem: "/imgProjetos/filmes.png",
          titulo: "Filmes Guide",
          descricao: "Challange organo",
          tech: "Techs: HTML CSS JS REACT |FIGMA TRELLO",
          repo: "https://github.com/LucineiaSilvah/melhoresFilmes",
          demo: "https://melhores-filmes.vercel.app/",
        },
        {
          imagem: "/imgProjetos/lpage.png",
          titulo: "Lading Page",
          descricao: "Projeto curso Web",
          tech: "Techs: HTML | BOOTSTRAP",
          repo: "https://github.com/LucineiaSilvah/gamePage",
          demo: "https://gamespage.netlify.app/",
        },
      ],
    },
    {
      plus: [
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Previão do tempo",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/previsao-tempo",
          demo: "https://creative-pasca-acad28.netlify.app/",
        },
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Digimon Fetch",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/digimon",
          demo: "https://digimonfetch.netlify.app/",
        },
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Regra de 3 simple",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/regra-de-3",
          demo: "https://regra-de-3-calculadora.netlify.app/",
        },
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Play List",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/player",
          demo: "https://playlist24.netlify.app/",
        },
        {
          imagem: "/imgProjetos/salmos.png",
          titulo: "Salmos",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS",
          repo: "",
          demo: "https://salmos.netlify.app/",
        },
        {
          imagem: "age.png",
          titulo: "Calculadora de Idade",
          descricao: "FrontEndMentor",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/age-calculator",
          demo: "https://calculatoragefree.netlify.app/",
        },
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Calculadora em React",
          descricao: "Projeto Pessoal",
          tech: "Techs: HTML CSS JS REACT",
          repo: "https://vercel.com/lucineiasilvah/calculadora-react/CsChENtjLmUkVEJYmYgx3CP5DtxR",
          demo: "https://calculadora-react-git-master-lucineiasilvah.vercel.app/",
        },
        {
          imagem: "/imgProjetos/petshop.png",
          titulo: "Trocador de Background",
          descricao: "Projeto Freecode Camp",
          tech: "Techs: HTML CSS JS",
          repo: "https://github.com/LucineiaSilvah/trocadorCorDeFundo",
          demo: "https://trocadordecordefundo.netlify.app/",
        },
      ],
    },
  ];


  return (
    <Slider {...settings}>

  
      {projetos[0].destaque.map((p, i) => (
        <Projeto
          key={i}
          imagem={imageUrls[0]}
          titulo={p.titulo}
          descricao={p.descricao}
          tech={p.tech}
          demo={p.demo}
          repo={p.repo}
        />
      ))}
    </Slider>
  );
}
