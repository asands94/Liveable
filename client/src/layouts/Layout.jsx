import { Link } from 'react-router-dom';
import SignUp from '../screens/SignUp/SignUp'
import Login from '../screens/Login/Login'

export default function Layout(props) {
  const { currentUser, setCurrentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'><h1>- Liveable -</h1></Link>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <Link to='/posts'>All Posts</Link>
          <Login setCurrentUser={setCurrentUser} />
          <SignUp setCurrentUser={setCurrentUser} />
          <Link to='/about'>About</Link>
        </>
      )}
      {currentUser && (
        <div>
          <Link to='/posts'>Posts</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}