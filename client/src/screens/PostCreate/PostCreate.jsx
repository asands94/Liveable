import { useState } from 'react'
import Locations from '../Posts/Locations';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    location_id: '',
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
      <Locations handleChange={handleChange} locations={locations} />
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
