export default function Categories(props) {

  const { categories, handleChange, formData } = props;

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id}>
          <input
            name={category.name}
            onChange={handleChange}
            // checked={formData.categories.includes(category.id)}
            value={category.id}
            type='checkbox'
          />
          <label>{category.name}</label>
        </div>
      ))}

    </div>
  )
}
