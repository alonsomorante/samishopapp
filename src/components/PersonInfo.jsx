import React from 'react'
import { capitalizedFirstLetter } from '../utils/capitalizeFirstLetter'

function PersonInfo ({ feature, children }) {
  return (
    <div className='person-features__ginfo'>

      <div className='person-features__physical'>
        <p className='person-features__physical--first'>{children}</p>
        <p className='person-features__physical--second'>{capitalizedFirstLetter(feature)}</p>
      </div>
    </div>
  )
}

export default PersonInfo
