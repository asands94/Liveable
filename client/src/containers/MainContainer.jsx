import { useState, useEffect } from 'react';
import { Redirect, Switch, Route, useHistory } from 'react-router-dom';

import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import { getAllCategories } from '../services/categories';
import { getAllLocations } from '../services/locations';

import PostEdit from '../screens/PostEdit/PostEdit';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import NotFound from '../screens/NotFound/NotFound';
import About from '../screens/About/About';
import PostCreate from '../screens/PostCreate/PostCreate';
import PostsFilter from '../screens/Posts/PostsFilter';

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
    history.push(`/profile/${currentUser.username}`);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route exact path='/posts/new'>
          <PostCreate
            categories={categories}
            locations={locations}
            handleCreate={handleCreate}
          />
        </Route>
        <Route exact path='/posts/:id/edit'>
          <PostEdit
            categories={categories}
            posts={posts}
            handleUpdate={handleUpdate}
            locations={locations}
          />
        </Route>
        <Route exact path='/posts'>
          <PostsFilter
            locations={locations}
            posts={posts}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path='/profile/:username'>
          <Profile
            categories={categories}
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
            categories={categories}
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
