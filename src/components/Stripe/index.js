import React from "react";
import {
  CardElement,
  Elements,
  injectStripe
} from "react-stripe-elements";
import TextForm from "../TextForm/TextForm";

const handleBlur = () => {
  console.log("[blur]");
};
const handleChange = change => {
  console.log("[change]", change);
  if(change.complete) {
      console.log('true')
  }else {console.log('false')}
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
        errorMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = ev => {
        ev.preventDefault();
        if (this.props.stripe) {
            this.props.stripe.createToken().then(payload => {
                if(typeof payload.error.code === 'string') {
                    this.state.errorMessage = (payload.error.message);
                    this.setState({errorMessage: this.state.errorMessage});
                    console.log(this.props.valueMessenger);
                    console.log(this.props. valueUrl);
                    console.log(this.props. valueHttp);
                }
                if (typeof payload.token === "string") {
                    return !this.state.error;
                }
                console.log("[token]", payload);
            });
        } else {
            console.log("Stripe.js hasn't loaded yet.");
        }
    };


    render() {
    const { price }  = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
          <p style={{color: "#721c24"}}>{this.state.errorMessage}</p>
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
    const { price, valueMessenger, valueUrl, valueHttp } = this.props;
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm price={price} fontSize={elementFontSize} valueMessenger={valueMessenger} valueUrl={valueUrl} valueHttp={valueHttp} />
        </Elements>
      </div>
    );
  }
}

export default injectStripe(Checkout);
