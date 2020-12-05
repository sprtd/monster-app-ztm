import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ handleChange, searchField }) => (
  <input type='search' placeholder='Search monsters'  value={searchField} onChange={handleChange}  className='search' />

)

  


export default SearchBox
