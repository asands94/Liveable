import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import edit from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'

const useStyles = makeStyles({
  root: {
    width: '10.7vw',
    height: 'calc(10.7vw * (1))',
    margin: 20,
    color: '#29541e',
    background: 'white', '&:hover': {
      background: '#29541e62',
      color: '#29541e18',
    },
  },
  media: {
    width: '10.7vw',
    height: 'calc(10.7vw * (1))',
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
      ) : (
        <CardContent>
          <Typography variant="body2" component="p">
            {(post.message).length > 100 ? (post.message).substring(0, 100) + "..." : post.message}
          </Typography>
        </CardContent>
      )}
      <div className='profile-icons'>
        <button className='delete' onClick={() => handleDelete(post.id)}><img src={deleteIcon} alt='delete icon' /></button>
        <Link to={`/posts/${post.id}/edit`}><button className='edit'><img src={edit} alt='edit icon' /></button></Link>
      </div>
    </Card>
  );
}
