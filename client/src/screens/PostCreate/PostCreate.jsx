import { useState } from 'react'
import Categories from '../Posts/Categories';
import Locations from '../Posts/Locations';
import './PostCreate.css'
import Footer from '../../layouts/Footer'

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    title: '',
    categories: [],
    message: '',
    image: ''
  });

  const { handleCreate, locations, currentUser, categories } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeChecked = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        categories: [...prevState.categories, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        categories: prevState.categories.filter((cat) => cat !== value),
      }));
    }
  };


  const isDisabled = currentUser === null ? true : false

  return (
    <>
      <div className='post-form-container'>
        <form
          className='create-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          <fieldset disabled={isDisabled}>
            <h3 className='form-title'>Share Your Experience</h3>
            <Locations handleChange={handleChange} locations={locations} />
            <Categories formData={formData} handleChange={handleChangeChecked} categories={categories} />
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
              placeholder='SHARE YOUR EXPERIENCE (250 characters max)'
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
