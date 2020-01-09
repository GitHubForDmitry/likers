import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "calc(100vh - 150px)"
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  h1: {
    color: "#fff"
  },
    card: {
        maxWidth: 4345,
    },
    media: {
        height: 140,
        width: 440
    },
}));



export default function Features() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid id="features" container direction="column"  className={classes.root}>

            </Grid>

        </React.Fragment>
    );
}