import { useState } from 'react'

export default function CreatePost(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    // category: '',
    title: '',
    message: '',
    image: ''
  });
  // const { location, category, title, message, image } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Share Your Experience</h3>
      {/* <select name='location'>
        <option value={formData.location_id}>Auckland</option>
        <option value={formData.location_id}>Wellington</option>
        <option value={formData.location_id}>Christchurch</option>
        <option value={formData.location_id}>Dunedin</option>
      </select> */}

      {/* <select name='category' multiple>
        <option value={formData.category}>Housing Security</option>
        <option value={formData.category}>House Maintainence</option>
        <option value={formData.category}>Prices</option>
      </select> */}

      <input
        type='text'
        name='location_id'
        placeholder="location"
        value={formData.location_id}
        onChange={handleChange}
      />
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
