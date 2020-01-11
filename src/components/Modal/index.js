import {Elements, StripeProvider} from "react-stripe-elements";
import Container from "@material-ui/core/Container";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {ReactComponent as Twitter} from "../../media/icons/twitter.svg";
import {ReactComponent as Instagram} from "../../media/icons/instagram.svg";
import {ReactComponent as Facebook} from "../../media/icons/facebook.svg";
import TextForm from "../TextForm/TextForm";
import CheckoutForm from "../Stripe";
import Modal from "@material-ui/core/Modal";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({

    heroContent: {
        padding: theme.spacing(8, 0, 6),
        textAlign: "center"
    },
    paper: {
        position: 'absolute',
        width: 550,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function ModalWindow({tier}) {
    
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
        <>
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
                            <TextForm label="http://"/>
                            <TextForm label="email"/>
                        </Container>
                        <Elements>
                            <CheckoutForm price={tier.price}/>
                        </Elements>
                    </div>
                </StripeProvider>
            </div>
        </Modal>
            </>
        )


}