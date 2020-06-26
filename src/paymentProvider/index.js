import React, { createContext, useContext, useState } from "react";

export const paymentDataContext = createContext();

const PaymentDataProvider = (props) => {
  const [paymentData, setPaymentData] = useState(null);
  const [submitData, setSubmitData] = useState({
    method_id: "1",
    item_id: "",
  });
  console.log(submitData);

  return (
    <paymentDataContext.Provider
      value={{ paymentData, submitData, setSubmitData }}
    >
      {props.children}
    </paymentDataContext.Provider>
  );
};

export const usePaymentData = () => {
  return useContext(paymentDataContext);
};

export default PaymentDataProvider;
