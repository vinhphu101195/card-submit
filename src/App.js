import React from "react";
import "./App.css";
import Header from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Payment from "./component/payment/payment";
import PaymentDataProvider from "./paymentProvider/paymentProvider";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="container">
        <Banner></Banner>
        <PaymentDataProvider>
          <Payment></Payment>
        </PaymentDataProvider>
      </div>
    </div>
  );
}

export default App;
