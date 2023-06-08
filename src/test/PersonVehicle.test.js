import { render, screen } from '@testing-library/react'
import PersonVehicle from './PersonVehicle'

test('renders the vehicle names', () => {
  const mockVehicles = [
    { name: 'Vehicle 1' },
    { name: 'Vehicle 2' }
  ]

  jest.mock('./usePeopleVehicles', () => ({
    default: jest.fn(() => ({
      vehicles: mockVehicles
    }))
  }))

  render(<PersonVehicle person={{}} />)

  expect(screen.getByText('Vehicle 1')).toBeInTheDocument()
  expect(screen.getByText('Vehicle 2')).toBeInTheDocument()
})
