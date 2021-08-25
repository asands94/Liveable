import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/categories';
import { getAllLocations } from '../services/locations';

import Posts from '../screens/Posts/Posts';
import PostCreate from '../screens/PostCreate/PostCreate';
import PostEdit from '../screens/PostEdit/PostEdit';
import PostDetail from '../screens/PostDetail/PostDetail';

export default function MainContainer(props) {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [locations, setLocations] = useState([])
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getAllLocations();
      setLocations(locations);
    };
    fetchLocations();
  }, []);

  const handleCreate = async (formData) => {
    const postData = await createPost(formData);
    setPosts((prevState) => [...prevState, postData]);
    history.push('/posts');
  };

  const handleUpdate = async (id, formData) => {
    const postData = await updatePost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post;
      })
    );
    history.push('/posts');
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/posts/:id'>
          <PostDetail
            categories={categories}
            locations={locations}
          />
        </Route>
        <Route path='/posts'>
          <Posts
            posts={posts}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
