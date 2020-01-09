import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../media/header.png';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${HeaderImg})`
    },
    heroContent: {
        width: "100%",
        heigth: "100%",
    },

}));



export default function Features() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid id="feature" container direction="column"  className={classes.root}>
                <CssBaseline />
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h2" variant="h2" gutterBottom>
                        Welcome to LIKERS
                    </Typography>
                </Container>
            </Grid>

        </React.Fragment>
    );
}