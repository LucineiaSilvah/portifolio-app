import React from "react";
import Slider from "react-slick";
import {data} from '../../db';
import Projeto from "../Projetos/Projeto";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <Slider {...settings}>

     {
      data && data[0].destaque.map( (p,i) =>{
        return(
          <Projeto
          key={i}
          imagem={p.imagem}
          titulo={p.titulo}
          descricao={p.descricao}
          tech={p.tech}
          demo={p.demo}
          repo={p.repo}
        />
        )
      })
     }
     
    </Slider>
  );
}
