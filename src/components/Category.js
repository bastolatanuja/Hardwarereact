import React, { Component } from 'react'
import '../style.css'

class Category extends Component{
    render(){
        return(
           <div className='category-body'>
            <h1 className='heading'> Categories</h1>
            <div className='category-container'>
                <div >
                   <a href='category'>  <img className='Category-Image'  src={require('../assets/plumbers.png')} alt="react logo" />
                     <div className="product-title">
                        <h3>Plumbing</h3>
                     </div>
                     </a>
                </div>
                <div>
                <a href='category'>
                <img className='Category-Image'  src={require('../assets/bricks.png')} alt="react logo" />
                    <div className="product-title">
                            <h3>Construction</h3>
                        </div>
                        </a>
                </div>
                <div>
                <a href='category'>
                <img className='Category-Image'  src={require('../assets/cements.png')} alt="react logo" />
                        <div className="product-title">
                                <h3>Cement</h3>
                            </div>

                            </a>
                </div>
                <div>
                <a href='category'>
                <img className='Category-Image'  src={require('../assets/furnitures.png')} alt="react logo" />
                        <div className="product-title">
                                <h3>Furnitures</h3>
                            </div>
                            </a>
                </div>
            </div>
           </div> 

        )
    }
}

export default Category