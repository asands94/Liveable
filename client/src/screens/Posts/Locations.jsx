import React from 'react'

export default function Locations(props) {
  const { locations, handleChange } = props;

  return (
    <div>
      <select style={{ color: '#29541E' }} name='location_id' onChange={handleChange} defaultValue='default'>
        <option disabled value='default'>
          -- Select a Location --
        </option>
        {locations?.map((location) => (
          <option
            key={location.id}
            type='text'
            value={location.id}
          > {location.name}
          </option>
        ))}
      </select>
      <br />
    </div>
  )
}
