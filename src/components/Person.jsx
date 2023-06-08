import React, { useState } from 'react'
import Header from './Header'
import People from './People'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Person ({ people }) {
  const [person, setPerson] = useState(null)

  const selectPerson = ({ index }) => {
    return setPerson(people[index])
  }

  const changePerson = () => {
    return setPerson(null)
  }

  return (
    <>
      {person === null
        ? (
          <>
            <Header>People</Header>
            <People people={people} selectPerson={selectPerson} />
          </>
          )
        : (
          <>
            <Desktop people={people} selectPerson={selectPerson} person={person} changePerson={changePerson} />
            <Mobile person={person} changePerson={changePerson} />
          </>
          )}
    </>
  )
}

export default Person
