import React from "react";
import { CardElement, Elements, injectStripe } from "react-stripe-elements";
import TextForm from "../TextForm/TextForm";
import Stripe from "../../media/stripe.png";

const handleBlur = () => {
  console.log("[blur]");
};

const handleClick = () => {
  console.log("[click]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4"
        },
        padding
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
};

class _CardForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorMessage: "",
      payloadMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(payload => console.log(payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const { price, title } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="stripe__title">{title}</h2>
        <label>
          Card details
          <CardElement
            onBlur={handleBlur}
            onChange={this.handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
          <div style={{ color: "#721c24" }} role="alert">
            {this.state.errorMessage}
          </div>
        </label>
        <button className="stripe__button">Pay ${price}</button>

      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);
class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? "14px" : "18px"
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== "14px") {
        this.setState({ elementFontSize: "14px" });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== "18px"
      ) {
        this.setState({ elementFontSize: "18px" });
      }
    });
  }

  render() {
    const { elementFontSize } = this.state;
    const { price, valueMessenger, valueUrl, valueEmail, title } = this.props;
    return (
      <div className="Checkout">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            style={{ width: 100, height: "auto" }}
            src={Stripe}
            alt="stripe"
          />
        </div>
        <Elements>
          <CardForm
            price={price}
            title={title}
            fontSize={elementFontSize}
            valueMessenger={valueMessenger}
            valueUrl={valueUrl}
            valueEmail={valueEmail}
          />
        </Elements>
      </div>
    );
  }
}

export default injectStripe(Checkout);
