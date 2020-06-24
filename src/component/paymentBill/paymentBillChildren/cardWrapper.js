import React, { useState, useContext } from "react";
import "./cardWrapper.css";

const CardWrapper = (props) => {
  const paymentCards = [
    {
      amount: "10.000",
      diamon: "190",
    },
    {
      amount: "20.000",
      diamon: "490",
    },
    {
      amount: "50.000",
      diamon: "1.390",
    },
    {
      amount: "100.000",
      diamon: "2.790",
    },
    {
      amount: "200.000",
      diamon: "5.790",
    },
    {
      amount: "300.000",
      diamon: "8.790",
    },
    {
      amount: "500.000",
      diamon: "14.790",
    },
  ];
  // const [selectActive, setSelectActive] = useState("");
  const {
    selectActive: [selectActive, setSelectActive],
  } = {
    selectActive: useState(""),
    ...(props.state || {}),
  };

  const showCards = (cards) => {
    if (cards.length > 0) {
      return cards.map((card, index) => {
        return (
          <li
            className={selectActive.amount === card.amount ? "active" : ""}
            key={index}
            onClick={() => {
              setSelectActive(card);
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
    } else {
      return "";
    }
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">
          <h2>Chọn mệnh giá</h2>
        </div>
        <div className="card-list">
          <ul>{showCards(paymentCards)}</ul>
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
