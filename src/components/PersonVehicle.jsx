import { usePeopleVehicles } from '../hooks/usePeopleVehicles'

function PersonVehicle ({ person }) {
  const { vehicles } = usePeopleVehicles({ person })

  return (
    <div className='person-features__vehicles'>
      <h2 className='person-features__secheader'>Vehicles</h2>
      <div className='vehicles--content'>
        {vehicles.map(vechicle => (<p className='vehicles--name' key={vechicle.manufacturer}> {vechicle.name}</p>))}
      </div>
    </div>
  )
}

export default PersonVehicle
