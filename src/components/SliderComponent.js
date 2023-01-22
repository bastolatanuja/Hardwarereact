import React, { Component } from 'react';

import '../style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



class SliderComponent extends Component {
    render(){
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        cssEase:"linear"
      };
      return (
        <div>
        <Slider {...settings}>
          <div>
          <img className='slider_image'  src={require('../assets/sliderImage1.png')} alt="react logo" />
          </div>
          <div>
          <img className='slider_image'  src={require('../assets/sliderImage2.png')} alt="react logo" />
          </div>
          <div>
          <img className='slider_image'  src={require('../assets/sliderImage3.png')} alt="react logo" />
          </div>
          <div>
          <img className='slider_image'  src={require('../assets/sliderImage4.png')} alt="react logo" />
          </div>
          <div>
          <img className='slider_image'  src={require('../assets/sliderImage5.png')} alt="react logo" />
          </div>
        
        </Slider>
      </div>
       
        
      );
    }
  }
  
  export default SliderComponent;
