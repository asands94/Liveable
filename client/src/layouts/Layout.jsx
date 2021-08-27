import { Link } from 'react-router-dom';
import SignUp from '../screens/SignUp/SignUp'
import Login from '../screens/Login/Login'
import './Layouts.css'

export default function Layout(props) {
  const { currentUser, setCurrentUser, handleLogout } = props;
  return (
    <header>
      <div className='nav-header'>
        <div className='website-name'>
          <Link to='/'><h1>- Liveable -</h1></Link>
        </div>
        <div className='nav-links'>
          {currentUser && (
            <div>
              <Link to='/posts'><button className='nav-button'>ALL POSTS</button></Link>
            </div>
          )}
          {currentUser ? (
            <div>
              <Link to={`/profile/${currentUser.username}`}><button className='nav-button'>{(currentUser.username).toUpperCase()}</button></Link>
              <button className='nav-button' onClick={handleLogout}>LOGOUT</button>
            </div>
          ) : (
            <>
              <Link to='/posts'><button className='nav-button'>ALL POSTS</button></Link>
              <Login setCurrentUser={setCurrentUser} />
              <SignUp setCurrentUser={setCurrentUser} />
              <Link to='/about'><button className='nav-button'>ABOUT</button></Link>
            </>
          )}
          {currentUser && (
            <div>
              <Link to='/about'><button className='nav-button'>ABOUT</button></Link>
            </div>
          )}
        </div>
      </div>
      {props.children}
    </header>
  );
}