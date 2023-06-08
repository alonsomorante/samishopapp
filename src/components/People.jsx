import React from 'react'

function People ({ people, selectPerson }) {
  return (
    <ul>

      {people.map((person, index) => (
        <li key={person.name} className='person__content'>
          <div className='person__details'>
            <p className='person__name'>{person.name}</p>
            <p className='person__from'>{person.specie} from {person.planet}</p>
          </div>
          <svg onClick={() => selectPerson({ index })} width='17px' height='17px' viewBox='0 0 1024 1024' className='icon' version='1.1' xmlns='http://www.w3.org/2000/svg'><path d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z' fill='#000000' /></svg>
        </li>
      ))}

    </ul>
  )
}

export default People
