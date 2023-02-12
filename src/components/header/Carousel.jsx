import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../assets/img/carousel/carousel 1.jpg"
          alt="Atesoramos la inocencia"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../assets/img/carousel/carousel 2.jpg"
          alt="Entendemos la inocencia"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../assets/img/carousel/carousel 3.jpg"
          alt="La convertimos en mercado"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;