import { render, screen } from '@testing-library/react'
import PersonInfo from '../components/PersonInfo'

test('renders the feature and its value', () => {
  const feature = 'eye_color'
  const value = 'blue'

  render(<PersonInfo feature={feature}>{value}</PersonInfo>)

  const featureElement = screen.getByText(feature)
  const valueElement = screen.getByText(value)

  expect(featureElement).toBeInTheDocument()
  expect(valueElement).toBeInTheDocument()
})
