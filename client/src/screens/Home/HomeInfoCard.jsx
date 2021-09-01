import React from 'react'
import { Link } from 'react-router-dom'
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
  cardDarkM: {
    width: 250,
    height: 200,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#9F805B',
    overflow: 'scroll'
  },
  cardLightM: {
    width: 250,
    height: 200,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f8f7e5',
    overflow: 'scroll'
  },
});


export default function HomeInfoCard() {
  const classes = useStyles();


  return (
    <>
      <Card className={window.screen.width <= 900 ? classes.cardDarkM : classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="span">
            <h4>ISSUES</h4>
            <p>Renters often overpay for housing that is damp and mouldy and are unable to leave or hold their landlord
              accountable due to housing security. </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={window.screen.width <= 900 ? classes.cardLightM : classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="span">
            <h4>OUR GOAL</h4>
            <p>We want to document New Zealanders experience with rental properties to promote change for renters rights. </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={window.screen.width <= 900 ? classes.cardDarkM : classes.cardDark}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text' }} component="span">
            <h4>HOW YOU CAN HELP</h4>
            <p>Create a profile and share your experience with renting! </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={window.screen.width <= 900 ? classes.cardLightM : classes.cardLight}>
        <CardContent>
          <Typography variant="body2" classes={{ root: 'home-text-light' }} component="span">
            <Link className='about-link' to='/about'><h4>LEARN MORE</h4></Link>
            <p>Learn more about renting issues and how a housing WOF is a step in the right direction.</p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

