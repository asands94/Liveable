import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  image: {
    width: '16vw',
    height: 'calc(16vw * (1/2))',
    margin: 20,
    display: 'flex',
  },
  text: {
    width: '8vw',
    height: 'calc(16vw * (1/2))',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    width: '8vw',
    height: 'calc(16vw * (1/2))',
    display: 'flex',
    justifySelf: 'left'
  },
});

export default function HomePostCard(props) {
  const { post } = props;

  const classes = useStyles();

  return (
    <>
      {post.image ?
        (<Card className={classes.image}>
          {/* <CardActionArea> */}
          <CardMedia
            className={classes.media}
            component="img"
            alt={post.title}
            image={post.image}
            title={post.title}
          />
          {/* </CardActionArea> */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {(post.message).length > 50 ? (post.message).substring(0, 50) + "..." : post.message}
            </Typography>
          </CardContent>
        </Card>
        ) : (<Card className={classes.text}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {(post.message).length > 50 ? (post.message).substring(0, 50) + "..." : post.message}
            </Typography>
          </CardContent>
        </Card>)}
    </>
  );
}
