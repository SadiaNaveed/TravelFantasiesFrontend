import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class Payment extends Component {
  render() {
    return (
      <div>
        <StripeCheckout />
      </div>
    );
  }
}

export default Payment;
