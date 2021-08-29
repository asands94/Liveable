import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardDark: {
    width: '20vw',
    height: 'calc(20vw * (1/2))',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#9F805B'
  },
  cardLight: {
    width: '20vw',
    height: 'calc(20vw * (1/2))',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#E6E5D2'
  },
});

export default function HomeInfoCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="p">
            A message about the purpose
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="p">
            A message about the goal
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="p">
            A message about how you can help
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="p">
            A message about something
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

