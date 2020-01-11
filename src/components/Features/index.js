import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NestedList from "../List";
import twitterImage from "../../media/tw1.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 100
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 100
  },
  h1: {
    color: "#000"
  },
  card: {
    maxWidth: 4345
  },
  media: {
    height: 140,
    width: 440
  }
}));

export default function Features() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid id="features" container direction="column" className={classes.root}>
        <Container
          maxWidth="lg"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            className={classes.h1}
          >
            Features Include
          </Typography>
        </Container>
        <Container
          maxWidth="lg"
          component="main"
          className={classes.heroContent}
        >
          <Paper style={{ width: "100vw", margin: 10 }} elevation={3}>
            <NestedList
              title="About us in digits"
              list1="3 641 188 users"
              list2="above 40 000 tasks per day"
              list3="over 12 000 000 tasks completed"
            />
          </Paper>
          <Paper style={{ width: "100vw", margin: 10 }} elevation={3}>
            <NestedList
                title="What will happen"
                list1="Your profile will always be highlighted among all accounts."
                list2="Your account readability rating will increase."
                list3="This will not cause any suspicion since we work only with real people"
            />
          </Paper>
        </Container>
        <Container
          maxWidth="lg"
          component="main"
          className={classes.heroContent}
        >
          <Paper style={{ width: "100vw", margin: 10 }} elevation={3}>
            <NestedList
                title="Stripe Support"
                list1="The best standard in online payments"
                list2="Unmatched functionality"
                list3="Always Safe and Simple"
            />
          </Paper>
          <Paper style={{ width: "100vw", margin: 10 }} elevation={3}>
            <NestedList
                title="Guaranty"
                list1="We show result before and after"
                list2="Report about advantages"
                list3="24/7 support"
            />
          </Paper>
        </Container>
      </Grid>
    </React.Fragment>
  );
}
