import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import poster1 from '../Images/SponsorNET.png';
const slide = [
  {
   image:poster1,
  },
  {
    image:poster1, 
   },
   {
    image:poster1, 
   } 
]

function CarouselC() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {slide.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img height="550px" width="300px"
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>

    </div>
  );
}
export default CarouselC;
