import React, { useState } from "react";
import cl from "./Header.module.scss";

const Header = () => {
  const [width, setWidth] = useState(480);

  function openModal() {
    setWidth(0);
  }

  return (
    <header className={cl.Header} id="Header">
      <h4>
        <b style={{ color: "red" }}>P</b>epper Agency
      </h4>
      <nav className={cl.nav}>
        <a href="#About">О нас</a>
        <a href="#Points">Услуги</a>
        <a href="#Works">Портфолио</a>
        <a href="#Contacts">Контакты</a>
      </nav>
      <div className={cl.phone}>
        <i className="ri-phone-line"></i>
        <p>8-800-00-00-00</p>
      </div>
      {/* <div className={cl.gamburger}>
        <div className={cl.menu} onClick={openModal}>
          <div className={cl.menu_line}></div>
          <div className={cl.menu_line}></div>
          <div className={cl.menu_line}></div>
        </div>

        <div
          className={cl.modal}
          style={{ transform: `translateX(${width}px)` }}
        >
          <div className={cl.modal_menu}>
            <div>X</div>
            <a href="#About">О нас</a>
            <a href="#Points">Услуги</a>
            <a href="#Works">Портфолио</a>
            <a href="#Contacts">Контакты</a>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
