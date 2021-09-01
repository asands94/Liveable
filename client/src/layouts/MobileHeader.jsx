import React from 'react'
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import './Layouts.css'
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';

const options = [
  <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} exact to='/'>HOME</NavLink>,
  <Login />,
  <SignUp />,
  <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/posts'>ALL POSTS</NavLink>,
  <NavLink className='nav-button' activeStyle={{ color: '#9F805B' }} to='/about'>ABOUT</NavLink>
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='mobile-header'>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <h1 className='mobile-title'>-Liveable-</h1>
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'All Posts'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
