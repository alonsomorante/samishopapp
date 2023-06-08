import React from 'react'
import People from './People'
import PersonFeatures from './PersonFeatures'

function Desktop ({ people, selectPerson, person, changePerson }) {
  return (
    <div className='desktop__person'>

      <People people={people} selectPerson={selectPerson} />
      <div className='desktop-info'>
        <h2 className='person-features__secheader'>General Information</h2>
        <PersonFeatures person={person} changePerson={changePerson} />
      </div>

    </div>
  )
}

export default Desktop
