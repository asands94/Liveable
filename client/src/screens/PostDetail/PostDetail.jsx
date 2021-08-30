import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../services/posts'
import ProfileCard from '../Profile/ProfileCard'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function PostDetails(props) {
  const { open, handleClose, posts } = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{posts?.title}</DialogTitle>
        {posts.image && <CardActionArea>
          <CardMedia
            classes={{ root: 'class' }}
            component="img"
            alt={posts?.title}
            image={posts?.image}
            title={posts?.title}
          />
        </CardActionArea>}
        <CardContent>
          <Typography variant="body2" component="p">
            {(posts?.message)?.length > 100 ? (posts?.message)?.substring(0, 100) + "..." : posts?.message}
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
