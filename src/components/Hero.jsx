// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hero.css";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="page-container animate">
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Elevate Your Style</h1>
//           <p>Discover the latest trends in fashion.</p>
//           <button className="shop-btn" onClick={() => navigate("/shop")}>
//             Shop Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

  import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  // Slider images
  const sliderImages = [
     "/dress1.jpg",
    "/dress2.jpg",
    "/Tshirt.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container animate">
      {/* 🔥 HERO SECTION WITH BACKGROUND IMAGE */}
     <section className="hero">
  <img
    src={sliderImages[currentIndex]}
    alt="Fashion Slider"
    className="slider-img"
  />

  <div className="hero-content">
    <h1>Elevate Your Style</h1>
    <p>Discover the latest trends in fashion.</p>
    <button className="shop-btn" onClick={() => navigate("/shop")}>
      Shop Now
    </button>
  </div>
</section>

     
    </div>
  );
};

export default Hero;
