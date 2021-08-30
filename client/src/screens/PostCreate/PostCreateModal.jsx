import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Locations from '../Posts/Locations';

export default function PostCreateModal(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleCreate, locations } = props;
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
      <button className='action-button' variant="outlined" color="primary" onClick={handleClickOpen}>
        NEW POST
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Share Your Experience</DialogTitle>
        <DialogContent>
          <Locations handleChange={handleChange} locations={locations} />
          <TextField
            autoFocus
            margin="dense"
            type='text'
            name='title'
            placeholder='TITLE'
            value={formData.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            maxLength='250'
            name='message'
            placeholder='SHARE YOUR STORY'
            value={formData.message}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name='image'
            placeholder='IMAGE URL'
            value={formData.image}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleCreate(formData);
            }}
            color="primary"
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
