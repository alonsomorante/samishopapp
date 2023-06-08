import React from 'react'
import { render } from '@testing-library/react'
import PersonFeatures from '../components/PersonFeatures'

test('renders PersonFeatures component', () => {
  const person = {
    name: 'John Doe',
    eye_color: 'blue',
    hair_color: 'blonde',
    birth_year: '1990'
  }

  const { getByText } = render(<PersonFeatures person={person} />)

  expect(getByText('John Doe')).toBeInTheDocument()
  expect(getByText('Eye Color')).toBeInTheDocument()
  expect(getByText('Hair Color')).toBeInTheDocument()
  expect(getByText('Skin Color')).toBeInTheDocument()
  expect(getByText('Birth Year')).toBeInTheDocument()
})
