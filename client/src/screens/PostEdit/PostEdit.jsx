import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PostEdit.css'

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    // location_id: '',
    // category: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleUpdate, posts } = props;
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
    if (posts.length) {
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



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Share Your Experience</h3>

      <input
        type='text'
        name='title'
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
        value={formData.message}
        onChange={handleChange} />
      {/* REMOVE BR TAG */}
      < br />
      <input
        type='text'
        name='image'
        value={formData.image}
        onChange={handleChange}
      />
      {/* REMOVE BR TAG */}
      < br />
      <button>Submit</button>
    </form>
  )
}
