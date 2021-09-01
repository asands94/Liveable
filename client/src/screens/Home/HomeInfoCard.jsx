import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardDark: {
    width: '20vw',
    height: 'calc(20vw * (1/2))',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#9F805B'
  },
  cardLight: {
    width: '20vw',
    height: 'calc(20vw * (1/2))',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f8f7e5'
  },
});

export default function HomeInfoCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="span">
            <h4>ISSUES</h4>
            <p>Renters often overpay for housing that is damp and mouldy and are unable to leave or hold their landlord
              accountable do to housing security. </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="span">
            <h4>OUR GOAL</h4>
            <p>Renters often overpay for housing that is damp and mouldy and are unable to leave or hold their landlord
              accountable do to housing security. </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="span">
            <h4>HOW YOU CAN HELP</h4>
            <p>Renters often overpay for housing that is damp and mouldy and are unable to leave or hold their landlord
              accountable do to housing security. </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="span">
            <h4>LEARN MORE</h4>
            <p>Renters often overpay for housing that is damp and mouldy and are unable to leave or hold their landlord
              accountable do to housing security. </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

