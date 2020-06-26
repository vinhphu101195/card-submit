import React from "react";
import "./App.css";
import Header from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Payment from "./component/payment/payment";
import DataProvider from "./paymentProvider/index";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="container">
        <Banner></Banner>
        <DataProvider>
          <Payment></Payment>
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
