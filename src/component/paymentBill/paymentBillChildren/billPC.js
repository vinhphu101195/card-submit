import React from "react";
import "./billPC.css";

const BillPC = (props) => {
  const selectActive = props.state
    ? props.state
    : {
        amount: "0",
        diamon: "0",
      };
  return (
    <div className="bill-pc">
      <div className="bill-wrapper">
        <div className="payform">
          <h2 className="payform-title">Thông tin giao dịch</h2>
          <div className="payform-form">
            <div className="money">
              <h1>{selectActive.amount}đ</h1>
              <p>Nạp {selectActive.diamon} Kim Cương</p>
            </div>
            {/* <div className="line"></div> */}
            <div className="input">
              <div>Số seri:</div>
              <div>
                <input value="" />
              </div>
            </div>
            <div className="input">
              <div>Số thẻ:</div>
              <div>
                <input value="" />
              </div>
            </div>
            <div className="btn-row">
              <a href="/" className="">
                {/* <a href="/" className="disabled"> */}
                Thanh toán
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPC;
