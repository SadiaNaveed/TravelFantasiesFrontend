import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

export class Payment extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_51HxugVIBUwNWeIqCVgirx6POCEN43DssyLK92T1lexgfdaJc3Yr0m4pbzqnd2dtk7TpT4lt5Gz2kzVtnua0E7Dod00cv5NlWXh"
          token={Ontoken}
        />
      </div>
    );
  }
}

export default Payment;
