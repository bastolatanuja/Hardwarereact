import React from 'react'
import Banner from './Banner'
import FilterSort_bar from './FilterSort_bar'
import Product_collage from './Product_collage'
import Footer from './Footer'


const Product_Collection = () => {
  return (
    <div>
        <Banner/>
        <FilterSort_bar/>
        <Product_collage/>
        
        <Footer />
    </div>
  )
}

export default Product_Collection