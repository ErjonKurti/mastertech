import React from "react";
import "./Brands.css";
import { assets } from "../../assets/assets.js";

const Brands = () => {
  const duplicatedBrands = [...assets.brands, ...assets.brands];

  return (
    <div className="brands-container">
      <h2 className="brands-title">
        <span className="highlight2">Brand We</span> Work With
      </h2>
      <div className="brands-slider">
        <div className="brands-track">
          {duplicatedBrands.map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
