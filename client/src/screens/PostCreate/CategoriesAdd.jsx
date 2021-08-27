import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
import { addCategoryToPost } from '../../services/categories';

export default function CategoriesAdd(props) {
  const [posts, setPosts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPosts(postData);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const posts = await addCategoryToPost(id, selectedCategory);
    setPosts(posts);
  };

  return (
    <div>
      <h3>{posts?.title}</h3>
      {posts?.categories.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <select
          name='categories'
          onChange={handleChange}
          defaultValue='default'

        >
          <option disabled value='default'>
            -- Select a Category --
          </option>
          {categories?.map((category, index) => (
            <option key={index} value={category.id}>{category.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}
