import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          alt=""
          src="https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/logo.png"
        />
      </div>
      <div className="fill"></div>
      <div className="profile">
        <img
          className="avatar"
          src="https://avatar.alive.vn/user/avatar/60x60/8/7/8/1/32452_60_1.jpg"
          alt=""
        />
        <div>
          <p>Phu (32452)</p>
          <div className="diamond">
            <span>0</span>
            <img
              alt=""
              className="diamond"
              src="https://alive-static.sgp1.digitaloceanspaces.com/sites/payment/images/payment/diamond.png"
            />
          </div>
        </div>
      </div>
      <a
        className="logout-btn"
        href="https://alive.vn/login?redirect_url=https%3A%2F%2Falive.vn%2Fnapkc"
      >
        Đăng xuất
      </a>
    </header>
  );
};

export default Navbar;
