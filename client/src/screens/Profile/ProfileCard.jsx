import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PostDetail from '../PostDetail/PostDetail';

const useStyles = makeStyles({
  root: {
    width: '10.7vw',
    height: 'calc(10.7vw * (1))',
    margin: 20,
    color: '#29541e',
    '&:hover': {
      background: '#29541e68',
      color: '#29541e68',
      cursor: 'pointer'
    },
  },
  media: {
    width: '10.7vw',
    height: 'calc(10.7vw * (1))',
    '&:hover': {
      opacity: .1,
    },
  },

  rootM: {
    width: 250,
    height: 250,
    margin: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#29541e',
    '&:hover': {
      background: '#29541e68',
      color: '#29541e68',
      cursor: 'pointer'
    },
  },

  mediaM: {
    width: 250,
    height: 250,
    '&:hover': {
      opacity: .1,
    },
  },
})

export default function ProfileCard(props) {
  const { post, handleDelete, currentUser } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  if (!post) return 'Loading'

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className='post-detail-button' onClick={handleClickOpen}>
        <Card className={window.screen.width <= 900 ? classes.rootM : classes.root}>
          {post.image &&
            <CardMedia
              className={window.screen.width <= 900 ? classes.mediaM : classes.media}
              component="img"
              alt={post.title}
              image={post.image}
              title={post.title}
            />
          }
          <CardContent>
            <Typography variant="body2" component="p">
              {(post.message).length > 100 ? (post.message).substring(0, 100) + "..." : post.message}
            </Typography>
          </CardContent>
        </Card>
      </button>
      <PostDetail
        currentUser={currentUser}
        handleDelete={handleDelete}
        open={open}
        handleClose={handleClose}
        posts={post}
      />
    </>
  );
}
