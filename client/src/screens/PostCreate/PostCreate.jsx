import { useState } from 'react'
import Categories from '../Posts/Categories';
import Locations from '../Posts/Locations';
import './PostCreate.css'
import Footer from '../../layouts/Footer'

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleCreate, locations, currentUser, categories } = props;
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // type === 'checkbox' ?
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: checked,
    //   })) :
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const isDisabled = currentUser === null ? true : false

  return (
    <>
      <div className='post-form-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          <fieldset disabled={isDisabled}>
            <h3 className='form-title'>Share Your Experience</h3>
            <Locations handleChange={handleChange} locations={locations} />
            <Categories formData={formData} handleChange={handleChange} categories={categories} />
            <input
              className='input'
              type='text'
              name='title'
              placeholder='TITLE'
              value={formData.title}
              onChange={handleChange}
            />
            <textarea
              className='input'
              maxLength='250'
              rows="7"
              cols="40"
              name='message'
              placeholder='SHARE YOUR EXPERIENCE'
              value={formData.message}
              onChange={handleChange}
            />
            <input
              className='input'
              type='text'
              name='image'
              placeholder='IMAGE URL'
              value={formData.image}
              onChange={handleChange}
            />
            <button className='submit-button'>Submit</button>
          </fieldset>
        </form>
      </div>
      <Footer />
    </>
  );
}
