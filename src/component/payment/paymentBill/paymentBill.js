import React, { useState } from "react";
import "./paymentBill.css";
import CardWrapper from "./paymentBillChildren/cardWrapper";
import BillPC from "./paymentBillChildren/billPC";

const PaymentBill = (props) => {
  const [selectActive, setSelectActive] = useState("");

  return (
    <div className="payment-bill">
      <CardWrapper
        state={{ selectActive: [selectActive, setSelectActive] }}
        paymentCards={props.paymentCards}
      ></CardWrapper>
      <BillPC state={selectActive}></BillPC>
    </div>
  );
};

export default PaymentBill;
