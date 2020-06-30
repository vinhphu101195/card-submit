import React from "react";
import "./App.css";
import Header from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Payment from "./component/payment/payment";
import PaymentDataProvider from "./paymentProvider/paymentProvider";

function App() {
  return (
    // <div className="wrapper">
    //   <Header></Header>
    //   <div className="container">
    //     <Banner></Banner>
    //     <PaymentDataProvider>
    //       <Payment></Payment>
    //     </PaymentDataProvider>
    //   </div>
    // </div>
    <div className="admin-page-container">
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <div className="logo">
            <a href="index.html">
              <img
                src="https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/logo.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="main-menu">
          <div className="slimScrollDiv">
            <div className="menu-inner">
              <ul className="metismenu" id="menu">
                <li>
                  <span>Payment</span>
                  <div className="menu-children">
                    <div className="menu-children-table">
                      <a className="collapse-item" href="buttons.html">
                        Provider
                      </a>
                      <a className="collapse-item" href="buttons.html">
                        Item
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <span>Payment2</span>
                  <div className="menu-children">
                    <div className="menu-children-table">
                      <a className="collapse-item" href="buttons.html">
                        Provider
                      </a>
                      <a className="collapse-item" href="buttons.html">
                        Item
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  router */}
      <div className="admin-main-content">
        <div className="page-title-area">
          <div className="align-items-center">
            <h4 className="admin-page-title pull-left">Provider</h4>
            <table className="provider-table">
              <thead>
                <tr>
                  <th>Provider Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nap The Ngay</td>
                  <td>
                    <select name="status" className="provider-status">
                      <option value="active">active</option>
                      <option value="deactive">deactive</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Thu The Re</td>
                  <td>
                    <select name="status" className="provider-status">
                      <option value="active">active</option>
                      <option value="deactive">deactive</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className ="btn-row">
              <button type="submit" className="btn-submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
