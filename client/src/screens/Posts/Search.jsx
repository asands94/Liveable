export default function Search(props) {

  const { locations, handleSearch, handleSearchInput } = props;

  return (
    <div className='filter-search'>
      <form>
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => handleSearchInput(e)}
          name="Search"
          placeholder="Search"
          type="text"
          autoFocus />
      </form>

      <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
        <select onChange={(e) => handleSearch(e)} name='Search' defaultValue='default'>
          <option disabled value='default'>--Sort by Location--</option>
          <option value='All'>All</option>
          {locations.map((location) => (
            <option key={location.id}>{location.name}</option>
          ))}
        </select>
      </form>


    </div>
  )
}