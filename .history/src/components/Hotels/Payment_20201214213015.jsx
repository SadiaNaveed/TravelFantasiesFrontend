import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 100,
    };
    this.Ontoken = this.Ontoken.bind(this);
  }

  Ontoken = (token) => {
    const data = (token, this.state.totalAmount);
    // console.log(data);
    axios.post("http://localhost:4000/api/payment", data).then((res) => {
      console.log(res);
      alert("Payment Successfull");
    });
  };

  render() {
    // let price = this.state.totalAmount * 100;
    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_51HxugVIBUwNWeIqCVgirx6POCEN43DssyLK92T1lexgfdaJc3Yr0m4pbzqnd2dtk7TpT4lt5Gz2kzVtnua0E7Dod00cv5NlWXh"
          token={this.Ontoken}
          amount={1000000}
          //  description={`Total Pay ${amount}`}
        />
      </div>
    );
  }
}

export default Payment;
