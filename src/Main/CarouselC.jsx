import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import poster1 from '../Images/SponsorNET.png';
import poster2 from '../Images/Poster2.png'
import poster3 from '../Images/Poster3.png'
const slide = [
  {
   image:poster1,
  },
  {
    image:poster2, 
   },
   {
    image:poster3, 
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
