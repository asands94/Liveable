const Search = (props) => {

  const { locations, handleSearch } = props;


  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <select onChange={(e) => handleSearch(e)} name='Search' defaultValue='default'>
        {/* {console.log(props.value)} */}
        <option disabled value='default'>--Sort by Location--</option>
        <option value={props.value}>All</option>
        {locations.map((location) => (
          <option key={location.id}>{location.name}</option>
        ))}
      </select>
    </form>
  )
}

export default Search