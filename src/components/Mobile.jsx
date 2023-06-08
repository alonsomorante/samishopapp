import React from 'react'
import PersonFeatures from './PersonFeatures'

function Mobile ({ person, changePerson }) {
  return (
    <div className='mobile__person'>
      <PersonFeatures person={person} changePerson={changePerson} />
    </div>
  )
}

export default Mobile
