import React, { useState, useContext } from "react";
import "./paymentMethod.css";

const PaymentMethod = () => {
  const paymentMethodsObject = [
    {
      name: "Viettel",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/viettel.png",
    },
    {
      name: "Mobiphone",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/mobiphone.png",
    },
    {
      name: "Vinaphone",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/vinaphone.png",
    },
  ];
  const [selectActive, setSelectActive] = useState(paymentMethodsObject[0]);

  const showPaymentMethod = (methods) => {
    if (methods.length > 0) {
      return methods.map((method, index) => {
        return (
          <li
            className={
              selectActive.name === method.name ? "method active" : "method"
            }
            key={index}
            onClick={() => {
              setSelectActive(method);
            }}
          >
            <div>
              <img alt="name" src={method.img} />
              <span>{method.name}</span>
            </div>
            {/* <label className="label">KM</label> */}
          </li>
        );
      });
    }
  };

  return (
    <div className="payment-methods">
      <h6>Phương thức thanh toán</h6>
      <ul>{showPaymentMethod(paymentMethodsObject)} </ul>
    </div>
  );
};

export default PaymentMethod;
