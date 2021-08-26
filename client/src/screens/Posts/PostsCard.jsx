import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    margin: 20,
    display: 'flex'
  },
  media: {
    width: 200,
    height: 200,
  },
});

export default function ImgMediaCard(props) {
  const { post } = props;

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
    </Card>
  );
}
