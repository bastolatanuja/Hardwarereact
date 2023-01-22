import React, { Component } from 'react'
import '../style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Feature extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
         
          };
        return(
            <div>
                <h1 className='heading'> Featured Products</h1>
                
                <Slider {...settings}>
          <div >
          <img className='Feature-slider'  src={require('../assets/siddhartha.png')} alt="react logo" />
          </div>
          <div>
          <img className='Feature-slider'  src={require('../assets/new.jpg')} alt="react logo" />
          </div>
          <div>
          <img className='Feature-slider'  src={require('../assets/siddhartha.png')} alt="react logo" />
          </div>
          <div>
          <img className='Feature-slider'  src={require('../assets/new.jpg')} alt="react logo" />
          </div>
        
        </Slider>
      
            </div>
            
        )
    }
}

export default Feature