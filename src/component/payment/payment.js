import React from "react";
import PaymentMethod from "./paymentMethods/paymentMethod";
import PaymentBill from "./paymentBill/paymentBill";

const Payment = () => {
  const paymentMethodsObject = [
    {
      method_id: 1,
      name: "Viettel",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/viettel.png",
    },
    {
      method_id: 2,
      name: "Mobiphone",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/mobiphone.png",
    },
    {
      method_id: 3,
      name: "Vinaphone",
      img:
        "https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/vinaphone.png",
    },
  ];
  const paymentCards = [
    {
      item_id: 1,
      amount: "10.000",
      diamon: "190",
    },
    {
      item_id: 2,
      amount: "20.000",
      diamon: "490",
    },
    {
      item_id: 3,
      amount: "50.000",
      diamon: "1.390",
    },
    {
      item_id: 4,
      amount: "100.000",
      diamon: "2.790",
    },
    {
      item_id: 5,
      amount: "200.000",
      diamon: "5.790",
    },
    {
      item_id: 6,
      amount: "300.000",
      diamon: "8.790",
    },
    {
      item_id: 7,
      amount: "500.000",
      diamon: "14.790",
    },
  ];

  return (
    <div className="payment">
      <PaymentMethod
        paymentMethodsObject={paymentMethodsObject}
      ></PaymentMethod>
      <PaymentBill paymentCards={paymentCards}></PaymentBill>
    </div>
  );
};

export default Payment;
