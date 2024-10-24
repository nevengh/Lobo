import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/ryan-plomp-TT6Hep-JzrU-unsplash.jpg'
const Hero = () => {
  return (
    <div className='ne-hero'>
         <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={slide1} alt="" />
      </Carousel.Item>
      {/* <Carousel.Item>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  )
}

export default Hero