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
    // <div className="admin-page-container">
    //   <div className="sidebar-menu">
    //     <div className="sidebar-header">
    //       <div className="logo">
    //         <a href="index.html">
    //           <img
    //             src="https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/logo.png"
    //             alt="logo"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="main-menu">
    //       <div className="slimScrollDiv">
    //         <div className="menu-inner">
    //           <ul className="metismenu" id="menu">
    //             <li>
    //               <span>Provider</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="admin-main-content">
    //     <div className="page-title-area">
    //       <div className="align-items-center">
    //         <h4 class="admin-page-title pull-left">Dashboard</h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
