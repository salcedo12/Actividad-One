import React from "react";
import { Carousel, Container } from "react-bootstrap";
import bannerOne from "../img/bannerOne.png";
import bannerTwo from "../img/bannerTwo.png";
import bannerThree from "../img/bannerThree.png";
import "../css/banner.css";
import { HiChevronDown } from "react-icons/hi";
const MyCarousel = () => {
  return (
    <div>
        
     
      <Carousel>

<Carousel.Item>
  <img
    className="d-block  img-fluid"
    src={bannerOne}
    alt="First slide"
    id="sizeImg"
    />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block  img-fluid"
    src={bannerTwo}
    alt="Second slide"
    id="sizeImg"
    />
</Carousel.Item>
<Carousel.Item>
  <img 
    className="d-block img-fluid"
    src={bannerThree}
    alt="Third slide"
    id="sizeImg"
    />
</Carousel.Item>
</Carousel>
      
      <Container className="p-5 bg-success text-center" fluid>
      <p className="justify">
      Es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el cocreador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.

La serie se originó por un cortometraje rudimentario animado por Roiland para el festival de cine Channel 101 llamado Doc and Mharti, una parodia de los principales protagonistas de Back to the Future. Cuando la cadena NBC despidió a Harmon en 2013 por discusiones entre él y los ejecutivos de la serie que había creado, Community, él y Roiland desarrollaron una serie basada en los personajes ya creados por Roiland.


La sexta temporada se estrenó el 4 de septiembre de 2022 y consta de diez episodios. Se confirmó una séptima temporada como parte de un acuerdo a largo plazo con Cartoon Network que ordenó 70 nuevos episodios, que renovaron la serie hasta una décima temporada. Adult Swim cortó lazos con Justin Roiland en 2023 en medio de denuncias de violencia de género y anunció que volvería a contar sus roles.

      </p>
      <span className="flecha">
      <HiChevronDown />
      </span>
      
      </Container>
    </div>
      
    
  );
};

export default MyCarousel;
