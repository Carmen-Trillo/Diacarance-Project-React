import Carousel from 'react-bootstrap/Carousel';
import atesorar from "../../assets/img/carousel/carousel 1.jpg"
import entender from "../../assets/img/carousel/carousel 2.jpg"
import convertir from "../../assets/img/carousel/carousel 3.jpg"

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={atesorar}
          alt="Atesoramos la inocencia"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={entender}
          alt="Entendemos la inocencia"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={convertir}
          alt="La convertimos en mercado"
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselSlider;