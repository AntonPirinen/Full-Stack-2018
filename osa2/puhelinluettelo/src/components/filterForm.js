 import React from 'react'

 const FilterForm = ({ newFilter, handleFilterChange }) => {

  return(
    <div>
    filter shown with 
    <input
      value={newFilter}
      onChange={handleFilterChange}
    />
  </div>
  )
 }
    
export default FilterForm

