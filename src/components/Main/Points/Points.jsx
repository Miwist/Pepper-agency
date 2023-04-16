import React from "react";
import cl from "./Points.module.scss";

const Points = () => {
  return (
    <section className={cl.Points} id="Points">
      <div className={cl.title}>
        <h2>
          Вам нужна компания нацеленная на результат, которая знает что влияет
          на результат и может контролировать эти процессы?
        </h2>
      </div>
      <div className={cl.text}>
        <h4>
          Результат можно контролировать, соблюдая определённые
           <b style={{ color: "#EE741C" }}> правила и этапы</b> с креативным
          подходом
        </h4>
      </div>
      <div className={cl.items}>
        <div className={cl.item}>
          <h2>1</h2>
          <h5>SWOT анализ</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
        <div className={cl.item}>
          <h2>2</h2>
          <h5>Анализ конкурентов</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
        <div className={cl.item}>
          <h2>3</h2>
          <h5>Устанавливаем цели</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
        <div className={cl.item}>
          <h2>4</h2>
          <h5>Разработка стратегии</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
        <div className={cl.item}>
          <h2>5</h2>
          <h5>Трафик</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
        <div className={cl.item}>
          <h2>6</h2>
          <h5>Контроль успешной стратегии</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis
            nemo sint natus voluptate in laudantium deserunt veritatis ullam
            dicta! Sequi doloremque cumque excepturi a dolor hic ea debitis
            fugiat.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Points;
