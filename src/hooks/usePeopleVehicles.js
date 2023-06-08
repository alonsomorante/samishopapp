import { useState, useEffect } from 'react'

export function usePeopleVehicles ({ person }) {
  const [vehicles, setVehicles] = useState([])

  const vehiclesFromPerson = person.vehicles

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const responses = await Promise.all(vehiclesFromPerson.map(vehicle => fetch(vehicle)))
        const data = await Promise.all(responses.map(res => res.json()))
        setVehicles(data)
      } catch (error) {
        setVehicles([])
      }
    }

    fetchVehicles()
  }, [person])

  return { vehicles }
}
