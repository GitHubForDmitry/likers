import { Elements, StripeProvider } from "react-stripe-elements";
import Container from "@material-ui/core/Container";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import Stripe from "../../media/stripe.png";
import TextForm from "../TextForm/TextForm";
import CheckoutForm from "../Stripe";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    textAlign: "center"
  },
  paper: {
    position: "absolute",
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  stripe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function ModalWindow({ tier }) {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("twitter");
    function validURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }
    function validEmail(mail)
    {
        const pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        return !!pattern.test(mail);
    }
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [errorUrl, setErrorUrl] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [valueUrl, setValueUrl] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");

  const handleChangeUrl = e => {
    const val = e.target.value;
    setValueUrl(val);
    setErrorUrl(!validURL(valueUrl));

  };

  const handleChangeHttp = e => {
    const val = e.target.value;
    setValueEmail(val);
    setErrorEmail(!validEmail(valueEmail));
  };

  return (
    <>
      <Button
        type="button"
        fullWidth
        variant={tier.buttonVariant}
        color="primary"
        onClick={handleOpen}
      >
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

              <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
              >
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="twitter" className={classes.button}>
                    <Twitter
                      style={{
                        fill: "rgb(29, 161, 255)",
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }}
                    />
                    Twitter
                  </ToggleButton>
                  <ToggleButton value="instagram" className={classes.button}>
                    <Instagram
                      style={{
                        fill: "rgb(230, 72, 84)",
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }}
                    />
                    Instagram
                  </ToggleButton>
                  <ToggleButton value="facebook" className={classes.button}>
                    <Facebook
                      style={{
                        fill: "rgb(45, 75, 138)",
                        width: 20,
                        height: 20,
                        marginRight: 20
                      }}
                    />
                    Facebook
                  </ToggleButton>
                </ToggleButtonGroup>
                <TextForm
                  label="http://"
                  value={valueUrl}
                  handleChange={e => handleChangeUrl(e)}
                  error={errorUrl}
                />
                <TextForm
                  label="email"
                  value={valueEmail}
                  handleChange={e => handleChangeHttp(e)}
                  error={errorEmail}
                />
              </Container>
              <Elements>
                <CheckoutForm
                  price={tier.price}
                  title={tier.title}
                  valueMessenger={alignment}
                  valueUrl={valueUrl}
                  valueEmail={valueEmail}
                />
              </Elements>
            </div>
          </StripeProvider>
        </div>
      </Modal>
    </>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { isTextFormValue } }) => ({
    isTextFormValue
  }))
)(ModalWindow);
