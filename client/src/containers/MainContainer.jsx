import { useState, useEffect } from 'react';
import { Redirect, Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/categories';
import { getAllLocations } from '../services/locations';

import Posts from '../screens/Posts/Posts';
import PostEdit from '../screens/PostEdit/PostEdit';
import Home from '../screens/Home/Home';
import CategoriesAdd from '../screens/PostCreate/CategoriesAdd';
import Profile from '../screens/Profile/Profile';
import NotFound from '../screens/NotFound/NotFound';
import About from '../screens/About/About';
import PostDetails from '../screens/PostDetail/PostDetail';

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
    history.push(`/posts`);
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
        <Route exact path='/posts/:id/edit'>
          <PostEdit
            posts={posts}
            handleUpdate={handleUpdate}
            locations={locations}
          />
        </Route>
        <Route exact path='/posts/:id'>
          <PostDetails
            posts={posts}
            handleUpdate={handleUpdate}
            locations={locations}
          />
        </Route>
        {/* <Route exact path='/posts/:id'>
          <CategoriesAdd
            categories={categories}
            locations={locations}
          />
        </Route> */}
        <Route exact path='/posts'>
          <Posts
            posts={posts}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path='/profile/:username'>
          <Profile
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            posts={posts}
            currentUser={currentUser}
            locations={locations}
          />
        </Route>
        <Route exact path='/about'>
          <About
            locations={locations}
            posts={posts}
            handleCreate={handleCreate}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path='/'>
          <Home
            locations={locations}
            posts={posts}
            handleCreate={handleCreate}
            currentUser={currentUser}
          />
        </Route>
        <Route path='/404'>
          <NotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </div>
  )
}
