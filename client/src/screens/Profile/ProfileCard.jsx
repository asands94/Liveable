import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '10.7vw',
    height: '24.9vh',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    border: 'solid orange'
  },
  media: {
    width: '10.7vw',
    height: '24.9vh',
  },
});

export default function ImgMediaCard(props) {
  const { post, handleDelete } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {post.image ? (
        <>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={post.title}
              image={post.image}
              title={post.title}
            />
          </CardActionArea>
        </>
      ) :
        (<CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {(post.message).length > 100 ? (post.message).substring(0, 100) + "..." : post.message}
          </Typography>
        </CardContent>)}
      <button className='delete' onClick={() => handleDelete(post.id)}>delete</button>
      <Link to={`/posts/${post.id}/edit`}><button className='edit'>edit</button></Link>
    </Card>
  );
}
