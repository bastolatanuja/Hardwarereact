import React from 'react'

const FilterSort_bar = () => {
  return (
    <div className='filtersort'>
        <div className='filterbar'>
          <div className='box-title'><label>Filter by</label></div>
          <div className='borderbox select-tag'>
            <select className='select-filter'>
              <option>All Products</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
        </div>
        <div className='sortbar'>
        <div className='box-title'><label>Sort by</label></div>
          <div className='borderbox select-tag'>
            <select className='select-filter'>
              <option>Featured</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default FilterSort_bar