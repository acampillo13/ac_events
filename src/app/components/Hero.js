import React from "react";
import Button from "./Button";

export default function Hero({ imgBackground, title, subtitle, buttonContent, buttonClick }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content" style={{ backgroundImage: `url(${imgBackground})` }}>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {buttonContent && (
            <Button content={buttonContent} onClick={buttonClick} />
          )}
        </div>
      </div>
    </section>
  );
}