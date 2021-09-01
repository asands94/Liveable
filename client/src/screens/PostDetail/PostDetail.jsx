import React from 'react';
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import edit from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import Button from '@material-ui/core/Button';
import './PostDetail.css'

export default function PostDetails(props) {
  const { open, handleClose, posts, handleDelete, currentUser } = props;
  return (
    <div>
      <Dialog style={{ background: '#29541E98' }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {posts.image && <CardActionArea>
          <CardMedia
            component="img"
            alt={posts?.title}
            image={posts?.image}
            title={posts?.title}
            height='300'
          />
        </CardActionArea>}
        <CardContent>
          <DialogTitle style={{ color: '#29541E', textAlign: 'center' }} id="form-dialog-title">{posts?.title}</DialogTitle>
          <Typography style={{ color: '#29541E', fontFamily: "'Quicksand', sans-serif", fontSize: 'large', textAlign: 'center' }} variant="body2" component="p">
            {posts?.message}
          </Typography>
          {currentUser &&
            <div>
              <DialogActions classes={{ root: 'profile-icons' }}>
                <Button classes={{ root: 'edit button' }}>
                  <Link to={`/posts/${posts.id}/edit`}><img src={edit} alt='edit icon' /></Link>
                </Button>
                <Button className='delete' onClick={() => handleDelete(posts.id)}>
                  <img src={deleteIcon} alt='delete icon' />
                </Button>
              </DialogActions>
            </div>}
        </CardContent>
      </Dialog>
    </div>
  );
}
