import { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import CategoriesAdd from './CategoriesAdd';

export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    // location_id: '',
    // category: '',
    title: '',
    message: '',
    image: ''
  });

  const history = useHistory()

  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // console.log(formData.category)

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

      <input
        type='text'
        name='title'
        placeholder="TITLE"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type='text'
        name='message'
        placeholder='SHARE YOUR STORY'
        value={formData.message}
        onChange={handleChange}
      />
      <input
        type='text'
        name='image'
        placeholder='IMAGE URL'
        value={formData.image}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
