import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import SignUp from '../screens/SignUp/SignUp'
import Login from '../screens/Login/Login'
import './Layouts.css'
import profile from '../assets/profile.svg'

export default function Layout(props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 1)
      );
    }
  }, []);

  const { currentUser, setCurrentUser, handleLogout } = props;

  return (
    <header>
      <div className={`nav-header ${scroll ? 'scroll' : ""}`}>
        <div className='website-name'>
          <NavLink activeStyle={{ color: '#9F805B' }} exact to='/'><h1>- Liveable -</h1></NavLink>
        </div>
        <div className='nav-links'>
          {currentUser && (
            <>

            </>
          )}
          {currentUser ? (
            <>
              <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/posts'>ALL POSTS</NavLink>
              <NavLink activeStyle={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }} className='nav-profile' to={`/profile/${currentUser.username}`}><img src={profile} alt='profile icon' /></NavLink>
              <button className='nav-button' onClick={handleLogout}>LOGOUT</button>
              <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/about'>ABOUT</NavLink>
            </>
          ) : (
            <>
              <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/posts'>ALL POSTS</NavLink>
              <Login setCurrentUser={setCurrentUser} />
              <SignUp setCurrentUser={setCurrentUser} />
              <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/about'>ABOUT</NavLink>
            </>
          )}
        </div>
      </div>
      {props.children}
    </header>
  );
}