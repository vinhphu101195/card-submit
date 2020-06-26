import React, { useState } from "react";
import "./cardWrapper.css";
import { usePaymentData } from "../../../../paymentProvider/index";

const CardWrapper = (props) => {
  const { submitData, setSubmitData } = usePaymentData();

  const {
    selectActive: [selectActive, setSelectActive],
  } = {
    selectActive: useState(""),
    ...(props.state || {}),
  };

  const showCards = (cards) => {
    if (cards.length <= 0) {
      return null;
    }
    return cards.map((card, index) => {
      return (
        <li
          className={selectActive.item_id === card.item_id ? "active" : ""}
          key={index}
          onClick={() => {
            setSelectActive(card);
            setSubmitData({
              method_id: submitData.method_id,
              item_id: card.item_id,
            });
          }}
        >
          <div className="box">
            <div className="num1">{card.amount} đ</div>
            <div className="num2">
              <div className="diamond">
                <span>{card.diamon}</span>
                <img
                  alt=""
                  className="diamond"
                  src="https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/diamond.png"
                />
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">
          <h2>Chọn mệnh giá</h2>
        </div>
        <div className="card-list">
          <ul>{showCards(props.paymentCards)}</ul>
        </div>
      </div>
      <div className="wallet-info">
        <p className="strong">
          Lưu ý nạp kim cương trực tiếp bằng thẻ điện thoại:
        </p>
        <br />- Cần chọn chính xác mệnh giá nạp, trường hợp nạp thẻ 50k nhưng
        chọn mệnh giá 20k sẽ bị mất tiền.
        <br />
        <br />- Mọi vấn đề/ thắc mắc vui lòng liên hệ fanpage:{" "}
        <a href="https://www.facebook.com/alive.livestream/">Alive</a>
      </div>
    </div>
  );
};

export default CardWrapper;
