import React from "react";
import cl from "./About.module.scss";

const About = () => {
  return (
    <section className={cl.About} id="About">
      <div className={cl.application}>
        <p>Рекламное агенство</p>
        <h1 className={cl.About_title}>
          <b style={{ color: "red" }}>P</b>epper Agency
        </h1>
        <h5>Умеем строить долгосрочные отношения и планировать свою работу</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
          consectetur quidem maxime aperiam enim sunt voluptatem, reprehenderit
          numquam velit, mollitia illo temporibus repellat nihil quis quae
          maiores asperiores ad?
        </p>
        <button type="button">Оставить заявку</button>
      </div>
      <div className={cl.services}>
        <h5>Таргетированная реклама</h5>
        <div className={cl.line}></div>
        <h5>Контекстная реклама</h5>
        <div className={cl.line}></div>
        <h5>SMM</h5>
        <div className={cl.line}></div>
        <h5>SEO</h5>
        <div className={cl.line}></div>
        <h5>
          WEB-разработка <br /> Создание сайтов
        </h5>
        <div className={cl.line}></div>
        <h5>
          Оставить заявку <br /> на консультацию
        </h5>
        <div className={cl.line}></div>
      </div>
    </section>
  );
};

export default About;
