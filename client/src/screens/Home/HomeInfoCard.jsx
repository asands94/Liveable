import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 280,
    height: 140,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function HomeInfoCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A message about the purpose
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A message about the goal
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A message about how you can help
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A message about something
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

