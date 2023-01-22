import React from 'react'

const Banner = () => {
  return (
    <div className='banner-wrapper'>
        <div className='banner-item'>Plumbing</div>
        <div className='banner-item'><img className='Category-Image'  src={require('../assets/plumbers.png')} alt="react logo" /></div>
    </div>
  )
}

export default Banner