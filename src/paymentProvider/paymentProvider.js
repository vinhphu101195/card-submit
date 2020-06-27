import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const paymentDataContext = createContext();

const PaymentDataProvider = (props) => {
  const [paymentData, setPaymentData] = useState([]);
  const [paymentItemData, setPaymentItemData] = useState(null);
  const [submitData, setSubmitData] = useState({
    method_id: "1",
    method_name: "",
    item_id: "",
  });
  
  useEffect(() => {
    const fetchMethodData = async () => {
      const result = await axios.get(`http://localhost:8000/payment-method`);
      // xu ly error
      setPaymentData(result.data.data);
    };
    fetchMethodData();
  }, []);

  // useEffect to setPaymentData
  return (
    <paymentDataContext.Provider
      value={{ paymentData, submitData, setSubmitData }}
    >
      {props.children}
    </paymentDataContext.Provider>
  );
};
export default PaymentDataProvider;
