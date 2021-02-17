import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
export const SliderData = [
  "https://static.timesofisrael.com/www/uploads/2020/05/AP_20121515349051.jpg",
  "https://scx2.b-cdn.net/gfx/news/2017/thenorthwest.jpg",
  "http://www.land-of-the-bible.com/sites/default/files/Week%2012a%20The%20Sea%20of%20Galilee.jpg",
  "https://cdn.britannica.com/26/117726-050-D1C0323D/Kefar-Nahum-Israel-Sea-of-Galilee.jpg",
  "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/Galilee_16x9.jpg?itok=24fyh8f_",
];
function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[0]} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[1]} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[2]} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderData[4]} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
