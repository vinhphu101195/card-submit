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

  const fetchItemData = (methodID) => {
    axios
      .get(`http://localhost:8000/payment-item/${methodID}`)
      .then((result) => {
        if (result.data.error !== 0) {
          setPaymentItemData([]);
        } else {
          setPaymentItemData(result.data.data);
        }
      });
  };

  useEffect(() => {
    const fetchMethodData = () => {
      axios.get(`http://localhost:8000/payment-method`).then((result) => {
        if (result.data.error !== 0) {
          setPaymentData([]);
        } else {
          setPaymentData(result.data.data);
          setSubmitData({
            method_id: result.data.data[0].method_id,
            method_name: result.data.data[0].name,
            order: result.data.data[0].order,
            item_id: "",
          });
          fetchItemData(result.data.data[0].method_id);
        }
      });
    };
    fetchMethodData();
  }, []);

  useEffect(() => {
    if (submitData.method_id !== "") {
      fetchItemData(submitData.method_id);
    }
  }, [submitData.method_id]);

  console.log(paymentItemData);

  return (
    <paymentDataContext.Provider
      value={{ paymentData, paymentItemData, submitData, setSubmitData }}
    >
      {props.children}
    </paymentDataContext.Provider>
  );
};
export default PaymentDataProvider;
