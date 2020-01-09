import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextForm from "../TextForm/TextForm";
import Modal from "@material-ui/core/Modal";
import CheckoutForm from "../Stripe";
import {Elements, StripeProvider} from 'react-stripe-elements';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    toggleContainer: {
        margin: theme.spacing(2, 2),
    },
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        textAlign: "center"
    },

    cardHeader: {
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const tiers = [
    {
        title: 'Start',
        price: '30',
        description: ['500 likes', 'Progress report', 'Email support', 'Slowly'],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '50',
        description: ['1000 likes', 'Progress report', 'Email support', 'Fast'],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
    {
        title: 'Enterprise',
        price: '',
        description: [
            'More then 1000 likes',
            'Progress report per day',
            'Phone & email support',
            'Very fast',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function Pricing() {

    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <React.Fragment>
            <Grid id="pricing" container direction="column">
            <CssBaseline />
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="twitter" className={classes.button}>
                    <Twitter
                        style={{ fill: "rgb(29, 161, 255)", width: 20, height: 20, marginRight: 20 }}
                    />
                    Twitter
                    </ToggleButton>
                    <ToggleButton value="instagram" className={classes.button}>
                            <Instagram
                                style={{ fill: "rgb(230, 72, 84)", width: 20, height: 20, marginRight: 20 }}
                            />
                        Instagram
                    </ToggleButton>
                    <ToggleButton value="facebook" className={classes.button}>
                            <Facebook
                                style={{ fill: "rgb(45, 75, 138)", width: 20, height: 20, marginRight: 20 }}
                            />
                        Facebook
                    </ToggleButton>
                </ToggleButtonGroup>
                    <TextForm />
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map(tier => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map(line => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                        <Button type="button" fullWidth variant={tier.buttonVariant} color="primary" onClick={handleOpen}>
                                            {tier.buttonText}
                                        </Button>
                                        <Modal
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <div style={modalStyle} className={classes.paper}>
                                                <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                                                    <div className="example">
                                                        <Elements>
                                                            <CheckoutForm />
                                                        </Elements>
                                                    </div>
                                                </StripeProvider>
                                            </div>
                                        </Modal>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>

            </Grid>

        </React.Fragment>
    );
}