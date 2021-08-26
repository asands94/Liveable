import React from 'react'

export default function Locations(props) {
  const { locations } = props
  return (
    <div>
      <h3>Locations</h3>
      {locations.map((location) => (
        <h4 key={location.id}>{location.name}</h4>
      ))}
    </div>
  )
}
