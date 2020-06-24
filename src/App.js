import React from "react";
import "./App.css";
import Header from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import PaymentMethod from "./component/paymentMethods/paymentMethod";
import PaymentBill from "./component/paymentBill/paymentBill";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="container">
        <Banner></Banner>
        <PaymentMethod></PaymentMethod>
        <PaymentBill></PaymentBill>
      </div>
    </div>
  );
}

export default App;
