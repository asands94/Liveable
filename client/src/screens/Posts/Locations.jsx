import React from 'react'

export default function Locations(props) {
  const { locations, handleChange, formData } = props;

  return (
    <div>
      <select onChange={handleChange}>
        {locations?.map((location) => (
          <option
            name='location_id'
            value={formData.location_id}
          > {location.name}
          </option>
        ))}
      </select>
    </div>
  )
}
