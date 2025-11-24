import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container animate">
    <div className="about">
      <h2>About Fashionista</h2>
      <p>
        Welcome to <strong>Fashionista</strong> — where style meets confidence!
        We are passionate about bringing you the latest trends, timeless pieces,
        and sustainable fashion choices. Our goal is to make fashion accessible
        to everyone while promoting creativity and self-expression.
      </p>

      <div className="about-section">
        <div className="about-card">
          <h3>👗 Our Story</h3>
          <p>
            Founded in 2024, Fashionista started as a small boutique and has
            grown into an online platform for fashion lovers. We believe that
            fashion is more than just clothing — it’s a statement.
          </p>
        </div>

        <div className="about-card">
          <h3>🌍 Our Mission</h3>
          <p>
            To inspire confidence through fashion and offer premium-quality
            styles at affordable prices — with a focus on sustainability and
            ethical production.
          </p>
        </div>

        <div className="about-card">
          <h3>💫 Our Values</h3>
          <p>
            We stand for creativity, inclusivity, and responsibility. Every
            piece we design is made with care for both people and the planet.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
