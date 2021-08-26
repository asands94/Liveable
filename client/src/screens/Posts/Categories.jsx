import React from 'react'

export default function Categories(props) {
  const { categories } = props
  return (
    <div>
      <h3>Categories</h3>
      {categories.map((category) => (
        <h4 key={category.id}>{category.name}</h4>
      ))}
    </div>
  )
}
