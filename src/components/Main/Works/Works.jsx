import React from "react";
import cl from "./Works.module.scss";
import site1 from "../../../assets/img/site1.jpg";
import site2 from "../../../assets/img/site2.jpg";
import site3 from "../../../assets/img/site3.jpg";

const Works = () => {
  return (
    <section className={cl.Works} id="Works">
      <div className={cl.title}>
        <h1>
          Наши <b style={{ opacity: 0.2 }}>Работы</b>
        </h1>
      </div>
      <div className={cl.items}>
        <div className={cl.line}></div>
        <div className={cl.item}>
          <div className={cl.description}>
            <h2>Кейс №1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              exercitationem voluptate quibusdam iure dolorum aperiam, est
              dolore eos nam cupiditate nobis voluptates, qui animi libero
              blanditiis nulla at. Nesciunt, ipsum!
            </p>
            <a href="/">Смотреть кейс </a>
            <button type="button">Заказать такой же!</button>
          </div>
          <div className={cl.img}>
            <img src={site1} alt="site" />
          </div>
        </div>
        <div className={cl.line}></div>
        <div className={cl.item}>
          <div className={cl.description}>
            <h2>Кейс №2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              exercitationem voluptate quibusdam iure dolorum aperiam, est
              dolore eos nam cupiditate nobis voluptates, qui animi libero
              blanditiis nulla at. Nesciunt, ipsum!
            </p>
            <a href="/">Смотреть кейс </a>
            <button type="button">Заказать такой же!</button>
          </div>
          <div className={cl.img}>
            <img src={site2} alt="site" />
          </div>
        </div>
        <div className={cl.line}></div>
        <div className={cl.item}>
          <div className={cl.description}>
            <h2>Кейс №3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              exercitationem voluptate quibusdam iure dolorum aperiam, est
              dolore eos nam cupiditate nobis voluptates, qui animi libero
              blanditiis nulla at. Nesciunt, ipsum!
            </p>
            <a href="/">Смотреть кейс </a>
            <button type="button">Заказать такой же!</button>
          </div>
          <div className={cl.img}>
            <img src={site3} alt="site" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
