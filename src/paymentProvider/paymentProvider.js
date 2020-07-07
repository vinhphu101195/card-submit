import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const paymentDataContext = createContext();

const PaymentDataProvider = (props) => {
  const [paymentData, setPaymentData] = useState([]);
  const [paymentItemData, setPaymentItemData] = useState([]);
  const [submitData, setSubmitData] = useState({
    method_id: "",
    method_name: "",
    method_order: "",
    item_id: "",
  });

  useEffect(() => {
    const fetchMethodData = () => {
      axios.get(`http://localhost:8000/`).then((result) => {
        if (result.data.error !== 0) {
          setPaymentData([]);
        } else {
          setPaymentData(result.data.data);
        }
      });
    };
    fetchMethodData();
  }, []);
  console.log(submitData);

  return (
    <paymentDataContext.Provider
      value={{
        paymentData,
        paymentItemData,
        setPaymentItemData,
        submitData,
        setSubmitData,
      }}
    >
      {props.children}
    </paymentDataContext.Provider>
  );
};
export default PaymentDataProvider;
