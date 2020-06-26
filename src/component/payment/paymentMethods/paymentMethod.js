import React, { useState } from "react";
import "./paymentMethod.css";
import { usePaymentData } from "../../../paymentProvider/index";

const PaymentMethod = (props) => {
  const { submitData, setSubmitData } = usePaymentData();
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
              //   ...submitData.item_id,
              method_id: method.method_id,
            });
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
