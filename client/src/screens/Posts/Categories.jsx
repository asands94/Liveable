export default function Categories(props) {

  const { categories, handleChange } = props;

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id}>
          <input
            name={category.name}
            onChange={handleChange}
            value={category.id}
            type='checkbox'
          />
          <label>{category.name}</label>
        </div>
      ))}

    </div>
  )
}
