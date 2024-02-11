import React from "react";
import '../pages/Styles/Scroll.css';
import uno from '../imgs/uno.jpg';

export const Scroll = () => {
  return (
    <div className="body-container">
      <div className="scroll-box">
        <p>DESCANSO Y CONFORT</p>
        <h2>¡Disfruta en Familia!</h2>
        <a>Ver Galería</a>
      </div>

      <div className="image-scroll-container">
      <img src={uno} alt="" />
      </div>
    </div>
  );
};
