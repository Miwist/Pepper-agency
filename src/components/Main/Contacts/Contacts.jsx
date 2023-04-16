import React from "react";
import cl from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={cl.Contacts} id="Contacts">
      <div className={cl.title}>
        <h3>ОСТАВЬТЕ СВОЮ ЗАЯВКУ</h3>
      </div>

      <div className={cl.service}>
        <div className={cl.form}>
          <input type="tel" placeholder="Номер телефона" />
          <input type="email" placeholder="E-mail" />

          <button type="button">Оставить заявку</button>
        </div>
        <div className={cl.description}>
          <h4>
            <b style={{ color: "red" }}>P</b>epper Agency
          </h4>
          <p>
            Если хотите, чтобы в вас нуждались и продавали, вы не по адресу. Нам
            интересно качественное сотрудничество. Мы познакомимся , обсудим ваш
            бизнес - подумаем сможем ли мы вам помочь и прикинем подходящие
            инструменты
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
