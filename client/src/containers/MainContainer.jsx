import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/categories';
import { getAllLocations } from '../services/locations';

import Posts from '../screens/Posts/Posts';
import PostCreate from '../screens/PostCreate/PostCreate';
import PostEdit from '../screens/PostEdit/PostEdit';
import PostDetail from '../screens/PostDetail/PostDetail';
import Home from '../screens/Home/Home';
import Locations from '../screens/Posts/Locations';
import Categories from '../screens/Posts/Categories';
import CategoriesAdd from '../screens/PostCreate/CategoriesAdd';
import Profile from '../screens/Profile/Profile';

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
    history.push(`/posts/${posts.id}`);
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
          <PostCreate
            handleCreate={handleCreate}
            categories={categories} />
        </Route>
        <Route path='/posts/:id'>
          <CategoriesAdd
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
        <Route path='/categories'>
          <Categories
            categories={categories}
          />
        </Route>
        <Route path='/locations'>
          <Locations
            locations={locations}
          />
        </Route>
        <Route exact path='/profile/:username'>
          <Profile
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            posts={posts}
            currentUser={currentUser} />
        </Route>
        <Route path='/'>
          <Home
            posts={posts}
            handleCreate={handleCreate}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
