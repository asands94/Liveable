import { useState } from 'react'
import Locations from '../Posts/Locations';
// import CategoriesAdd from './CategoriesAdd';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    // category: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleCreate, locations } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Share Your Experience</h3>
      {/* <select name='location_id' value={formData.value} onChange={handleChange}>
        <option value='Auckland'>Auckland</option>
        <option value='Wellington'>Wellington</option>
        <option value='Christchurch'>Christchurch</option>
        <option value='Dunedin'>Dunedin</option>
      </select> */}
      {/* 
      <select name='category' multiple={true} value={formData.value} onChange={handleChange}>
        <option value='housing-security'>Housing Security</option>
        <option value='housing-maintainence'>House Maintainence</option>
        <option value='prices'>Prices</option>
      </select> */}

      {/* <CategoriesAdd categories={categories} /> */}

      {/* <input
        type='text'
        name='location_id'
        placeholder="LOCATION"
        value={formData.location_id}
        onChange={handleChange}
      /> */}


      {/* <Locations
        formData={formData}
        handleChange={handleChange}
        locations={locations}
      /> */}

      <select name='location_id' onChange={handleChange} defaultValue='default'>
        <option disabled value='default'>
          -- Select a Location --
        </option>
        {locations?.map((location) => (
          <>
            <option
              type='text'
              key={location.id}

              value={location.id}
            > {location.name}
            </option>
            {/* {console.log(location.id)} */}
          </>
        ))}
      </select>
      <br />



      <input
        type='text'
        name='title'
        placeholder='TITLE'
        value={formData.title}
        onChange={handleChange}
      />
      {/* REMOVE BR TAG */}
      < br />
      <textarea
        maxLength='250'
        rows="7"
        cols="40"
        name='message'
        placeholder='SHARE YOUR STORY'
        value={formData.message}
        onChange={handleChange} />
      {/* REMOVE BR TAG */}
      < br />
      <input
        type='text'
        name='image'
        placeholder='IMAGE URL'
        value={formData.image}
        onChange={handleChange}
      />
      {/* REMOVE BR TAG */}
      < br />
      <button>Submit</button>
    </form>
  );
}
