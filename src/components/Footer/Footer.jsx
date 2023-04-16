import React from "react";
import cl from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.bg}></div>
      <div className={cl.contacts}>
        <div className={cl.row}>
          <h4>
            <b style={{ color: "red" }}>P</b>epper Agency
          </h4>
          <i className="ri-instagram-line"></i>
          <i className="ri-whatsapp-line"></i>
          <i className="ri-telegram-line"></i>
        </div>
        <p>
          Создавать для людей. Менять мир к лучшему. Улучшать созданное. Быть
          причастным к великому. Наслаждаться моментом, 
           <b style={{ color: "#EE741C" }}> чувствовать</b>
        </p>
        <p style={{color: "gray", fontSize: "10px", marginTop: "10px"}}>Сайт создан Miwist</p>
      </div>
      <div className={cl.line}></div>
      <div className={cl.connection}>
     
        <div className={cl.phone}>
          <i className="ri-phone-line"></i>
          <p>8-800-00-00-00</p>
        </div>
        <button type="button">Связаться со мной</button>
      </div>
      <div className={cl.bg2}></div>
    </footer>
  );
};

export default Footer;
