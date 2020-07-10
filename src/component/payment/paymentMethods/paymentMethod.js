import React, { useState } from "react";
import "./paymentMethod.css";
import { usePaymentData } from "../../../paymentProvider/index";

const PaymentMethod = () => {
  const {
    paymentData,
    submitData,
    setSubmitData,
    setPaymentItemData,
  } = usePaymentData();
  const [selectActive, setSelectActive] = useState({ name: "" });
  const showPaymentMethod = (methods) => {
    if (methods.length <= 0) {
      return null;
    }
    return methods.map((method, index) => {
      return (
        <li
          className={
            selectActive.order === method.order ? "method active" : "method"
          }
          key={index}
          onClick={() => {
            setSelectActive(method);
            setSubmitData({
              item_id: "",
              method_id: method.method_id,
              method_name: method.name,
              method_order: method.order,
            });
            setPaymentItemData(method.PaymentItems);
          }}
        >
          <div>
            <img alt="name" src={method.img_url} />
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
