import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';
import home from '../../assets/homefooter.svg'
import profile from '../../assets/profile.svg'
import email from '../../assets/email.svg'
import lock from '../../assets/lock.svg'

export default function FormDialog(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className='nav-button' variant="outlined" color="primary" onClick={handleClickOpen}>
        SIGN UP
      </button>
      <Dialog style={{ background: '#29541E98' }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle style={{ color: '#9F805B', background: '#E6E5D2', textAlign: 'center' }} id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent style={{ background: '#E6E5D2' }}>
          <TextField
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
            autoFocus
            margin="dense"
            name="username"
            label={<img src={profile} alt='none' />}
            placeholder='Username'
            type="text"
            value={formData.username}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
            autoFocus
            margin="dense"
            name="email"
            label={<img src={email} alt='none' />}
            placeholder='Email Adress'
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
            autoFocus
            margin="dense"
            name="password"
            label={<img src={lock} alt='none' />}
            placeholder='Password'
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions style={{ background: '#E6E5D2' }}>
          <Button onClick={handleClose} style={{ color: '#29541E' }}>
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSignUp(formData);
            }}
            style={{ color: '#29541E' }}
          >
            CREATE ACCOUNT
          </Button>
        </DialogActions>
        <CardMedia style={{ transform: 'rotate(0deg)', position: 'relative', bottom: 0, background: '#E6E5D2' }}
          component="img"
          alt='footer'
          image={home}
          title='footer'
        />
      </Dialog>
    </div>
  );
}
