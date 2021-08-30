import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './PostDetail.css'

export default function PostDetails(props) {
  const { open, handleClose, posts } = props;
  return (
    <div>
      <Dialog style={{ background: '#29541E98' }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {posts.image && <CardActionArea>
          <CardMedia
            // classes={{ root: 'class' }}
            component="img"
            alt={posts?.title}
            image={posts?.image}
            title={posts?.title}
          />
        </CardActionArea>}
        <CardContent>
          <DialogTitle style={{ color: '#29541E', textAlign: 'center' }} id="form-dialog-title">{posts?.title}</DialogTitle>
          <Typography style={{ color: '#29541E', fontFamily: "'Quicksand', sans-serif", fontSize: 'large' }} variant="body2" component="p">
            {posts?.message}
          </Typography>
        </CardContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
