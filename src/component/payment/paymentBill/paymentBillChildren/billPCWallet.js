import React from "react";
import "./billPC.css";
import { usePaymentData } from "../../../../paymentProvider/index";
import axios from "axios";

const BillPC = (props) => {
  const { submitData } = usePaymentData();

  const selectActive = props.state
    ? props.state
    : {
        amount: "0",
        diamon: "0",
      };
  console.log(submitData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(submitData, null, 4));
    axios
      .post(
        "http://localhost:8000/payment",
        JSON.stringify(submitData, null, 4)
      )
      .then((res) => {
        if (res.data.data.payURL) {
          window.location.assign(res.data.data.payURL);
        } else {
          console.log(res.data.data);
        }
      });
  };

  return (
    <form className="bill-pc" onSubmit={onSubmit}>
      <div className="bill-wrapper">
        <div className="payform">
          <h2 className="payform-title">Thông tin giao dịch</h2>
          <div className="payform-form">
            <div className="money">
              <h1>{selectActive.amount}đ</h1>
              <p>Nạp {selectActive.diamon} Kim Cương</p>
            </div>
            <div className="btn-row">
              <button
                type="submit"
                className={submitData.item_id === "" ? "disabled" : ""}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BillPC;
