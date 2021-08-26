
import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Profile from './screens/Profile/Profile';
import {
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };
  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path='/profile/:username'>
            <Profile currentUser={currentUser} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
