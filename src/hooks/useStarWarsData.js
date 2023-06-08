import { useState, useEffect } from 'react'

const DATA_ENDPOINT = 'https://swapi.dev/api'

export function useStarWarsData () {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleData, speciesData, planetsData] = await Promise.all([
          fetch(`${DATA_ENDPOINT}/people`).then(res => res.json()),
          fetch(`${DATA_ENDPOINT}/species`).then(res => res.json()),
          fetch(`${DATA_ENDPOINT}/planets`).then(res => res.json())
        ])

        const joinPeople = peopleData.results.map((person, index) => {
          const specie = speciesData.results[index]
          const planet = planetsData.results[index]
          const vehicles = person.vehicles.map(vehicle => vehicle)

          return {
            vehicles: vehicles.length > 0 ? vehicles : 'Unknown',
            name: person.name,
            eye_color: person.eye_color,
            hair_color: person.hair_color,
            skin_color: person.skin_color,
            birth_year: person.birth_year,
            specie: specie ? specie.name : 'Unknown',
            planet: planet ? planet.name : 'Unknown'
          }
        })

        setPeople(joinPeople)
      } catch (error) {
        setError('Failed to Load Data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { people, loading, error }
}
