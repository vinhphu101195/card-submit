import React, { useState } from "react";
import "./paymentMethod.css";
import { usePaymentData } from "../../../paymentProvider/index";

const PaymentMethod = (props) => {
  const { paymentData, submitData, setSubmitData } = usePaymentData();
  const [selectActive, setSelectActive] = useState(
    props.paymentMethodsObject[0]
  );

  const showPaymentMethod = (methods) => {
    if (methods.length <= 0) {
      return null;
    }
    return methods.map((method, index) => {
      return (
        <li
          className={
            selectActive.name === method.name ? "method active" : "method"
          }
          key={index}
          onClick={() => {
            setSelectActive(method);
            setSubmitData({
              item_id: submitData.item_id,
              method_id: method.method_id,
              method_name: method.name,
              method_order: method.order,
            });
          }}
        >
          <div>
            <img alt="name" src={method.image} />
            <span>{method.name}</span>
          </div>
          {/* <label className="label">KM</label> */}
        </li>
      );
    });
  };

  return (
    <div>
      {" "}
      <div className="payment-methods">
        <h6>Phương thức thanh toán</h6>
        <ul>{showPaymentMethod(paymentData)} </ul>
      </div>
    </div>
  );
};

export default PaymentMethod;
