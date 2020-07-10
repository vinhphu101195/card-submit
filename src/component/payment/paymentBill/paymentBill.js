import React, { useState } from "react";
import "./paymentBill.css";
import CardWrapper from "./paymentBillChildren/cardWrapper";
import BillPC from "./paymentBillChildren/billPC";
import BillPCWallet from "./paymentBillChildren/billPCWallet";
import { usePaymentData } from "../../../paymentProvider/index";

const PaymentBill = (props) => {
  const [selectActive, setSelectActive] = useState("");
  const { submitData } = usePaymentData();

  return (
    <div className="payment-bill">
      <CardWrapper
        state={{ selectActive: [selectActive, setSelectActive] }}
        paymentCards={props.paymentCards}
      ></CardWrapper>

      {submitData.method_name === "VNPAY" ||
      submitData.method_name === "MoMo" ? (
        <BillPCWallet state={selectActive}></BillPCWallet>
      ) : (
        <BillPC state={selectActive}></BillPC>
      )}
    </div>
  );
};
// submitData.method_name === "VNPAY" || submitData.method_name === "MoMo"

export default PaymentBill;
