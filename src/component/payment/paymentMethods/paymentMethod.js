import React, { useState, useContext } from "react";
import "./paymentMethod.css";

const PaymentMethod = (props) => {
  const [selectActive, setSelectActive] = useState(
    props.paymentMethodsObject[0]
  );

  const showPaymentMethod = (methods) => {
    if (methods.length > 0) {
      return methods.map((method, index) => {
        return (
          <li
            value="method_id"
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
    <div>
      {" "}
      <div className="payment-methods">
        <h6>Phương thức thanh toán</h6>
        <ul>{showPaymentMethod(props.paymentMethodsObject)} </ul>
      </div>
    </div>
  );
};

export default PaymentMethod;
