import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Locations from '../Posts/Locations';
import Categories from '../Posts/Categories';
import './PostEdit.css'
import Footer from '../../layouts/Footer'

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleUpdate, posts, locations, categories } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const post = posts.find((post) => post.id === Number(id));
      setFormData({
        title: post.title,
        message: post.message,
        image: post.image
      })
    }
    if (posts?.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!posts) return "Loading..."

  return (
    <>
      <div className='edit-form-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
        >
          <fieldset>
            <h3 className='form-title-edit'>Share Your Experience</h3>
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
        </form >
      </div>
      <Footer />
    </>
  )
}
