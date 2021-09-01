import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Locations from '../Posts/Locations';
import Categories from '../Posts/Categories';

export default function PostCreateModal(props) {
  const [formData, setFormData] = useState({
    location_id: '',
    title: '',
    message: '',
    image: ''
  });

  const { handleCreate, locations, categories } = props;
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
      <Dialog style={{ background: '#29541E98' }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle style={{ color: '#29541E', background: '#E6E5D2', textAlign: 'center' }} id="form-dialog-title">Share Your Experience</DialogTitle>
        <DialogContent style={{ background: '#E6E5D2' }}>
          <Locations handleChange={handleChange} locations={locations} />
          <Categories handleChange={handleChange} categories={categories} />
          <TextField
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
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
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
            autoFocus
            margin="dense"
            maxLength='250'
            name='message'
            placeholder='SHARE YOUR EXPERIENCE'
            value={formData.message}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            style={{ filter: 'invert(52%) sepia(32%) saturate(468%) hue-rotate(353deg) brightness(94%) contrast(84%)' }}
            autoFocus
            margin="dense"
            name='image'
            placeholder='IMAGE URL'
            value={formData.image}
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
              handleCreate(formData);
            }}
            style={{ color: '#29541E' }}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
