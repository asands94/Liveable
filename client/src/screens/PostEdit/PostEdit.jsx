import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      <input
        type='text'
        name='message'
        value={formData.message}
        onChange={handleChange}
      />
      <input
        type='text'
        name='image'
        value={formData.image}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
