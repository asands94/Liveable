import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  all: {
    width: '20vw',
    height: 'calc(20vw * (1/2))',
    margin: 20,
    display: 'flex',
    color: '#29541e',
  },
  textOnly: {
    width: '10vw',
    height: 'calc(20vw * (1/2))',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#29541e',
  },
  media: {
    width: '10vw',
    height: 'calc(20vw * (1/2))',
    display: 'flex',
    justifySelf: 'left',
    color: '#29541e',
  },
  mediaM: {
    width: 250,
    height: 250,
    display: 'flex',
    justifySelf: 'left',
    color: '#29541e',
  },
  allM: {
    width: 500,
    height: 250,
    margin: 10,
    display: 'flex',
    color: '#29541e',
  },
  textOnlyM: {
    width: 250,
    height: 250,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#29541e',
  },

});

export default function HomePostCard(props) {
  const { post } = props;

  const classes = useStyles();

  return (
    <>
      {post.image ?
        (<Card className={window.screen.width <= 900 ? classes.allM : classes.all}>
          <CardMedia
            className={window.screen.width <= 900 ? classes.mediaM : classes.media}
            component="img"
            alt={post.title}
            image={post.image}
            title={post.title}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              {(post.message).length > 50 ? (post.message).substring(0, 50) + "..." : post.message}
            </Typography>
          </CardContent>
        </Card>
        ) : (<Card className={window.screen.width <= 900 ? classes.textOnlyM : classes.textOnly}>
          <CardContent>
            <Typography variant="body2" component="p">
              {(post.message).length > 50 ? (post.message).substring(0, 50) + "..." : post.message}
            </Typography>
          </CardContent>
        </Card>)}
    </>
  );
}
