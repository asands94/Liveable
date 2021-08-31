import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PostDetail from '../PostDetail/PostDetail';

const useStyles = makeStyles({
  root: {
    width: '15vw',
    height: 'calc(15vw * (1))',
    margin: 12,
    display: 'flex',
    justifyContent: 'center',
    color: '#29541e',
    '&:hover': {
      background: '#29541e62',
      color: '#29541e18',
      cursor: 'pointer'
    },
  },
  media: {
    width: '15vw',
    height: 'calc(15vw * (1))',
    '&:hover': {
      opacity: .05,
    },
  },
});

export default function ImgMediaCard(props) {
  const { post } = props; const

    [open, setOpen] = React.useState(false);
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
        <Card className={classes.root}>
          {post.image ?
            (

              <CardMedia
                className={classes.media}
                component="img"
                alt={post.title}
                image={post.image}
                title={post.title}
              />

            ) :
            (
              <CardContent>
                <Typography variant="body2" component="p">
                  {(post.message).length > 100 ? (post.message).substring(0, 100) + "..." : post.message}
                </Typography>
              </CardContent>
            )}
        </Card>
      </button>
      <PostDetail
        open={open}
        handleClose={handleClose}
        posts={post}
      />
    </>
  );
}
