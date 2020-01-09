import React from 'react';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    Elements,
    injectStripe} from 'react-stripe-elements';


const handleBlur = () => {
    console.log('[blur]');
};
const handleChange = (change) => {
    console.log('[change]', change);
};
const handleClick = () => {
    console.log('[click]');
};
const handleFocus = () => {
    console.log('[focus]');
};
const handleReady = () => {
    console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
                padding,
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};

class _SplitForm extends React.Component {
    handleSubmit = (ev) => {
        ev.preventDefault();
        if (this.props.stripe) {
            this.props.stripe
                .createToken()
                .then((payload) => console.log('[token]', payload));
        } else {
            console.log("Stripe.js hasn't loaded yet.");
        }
    };
    render() {
        return (
            <form className="stripe__form" onSubmit={this.handleSubmit}>
                <label className="stripe__label">
                    Card number
                    <CardNumberElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <label className="stripe__label">
                    Expiration date
                    <CardExpiryElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <label className="stripe__label">
                    CVC
                    <CardCVCElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <button className="stripe__button">Pay</button>
            </form>
        );
    }
}
const SplitForm = injectStripe(_SplitForm);

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
        };
        window.addEventListener('resize', () => {
            if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
                this.setState({elementFontSize: '14px'});
            } else if (
                window.innerWidth >= 450 &&
                this.state.elementFontSize !== '18px'
            ) {
                this.setState({elementFontSize: '18px'});
            }
        });
    }

    render() {
        const {elementFontSize} = this.state;
        return (
            <div className="Checkout">
                <h1>Available Elements</h1>
                <Elements>
                    <SplitForm fontSize={elementFontSize} />
                </Elements>

            </div>
        );
    }
}

export default injectStripe(Checkout);