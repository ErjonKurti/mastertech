import React from "react";
import "./Brands.css";

const brands = [
  { name: "MOVEX", logo: "movex.png" },
  { name: "A4TECH", logo: "a4tech.png" },
  { name: "Radiant", logo: "radiant.png" },
  { name: "MAXHUB", logo: "maxhub.png" },
  { name: "IC Solutions", logo: "icsolutions.png" },
  { name: "EXOTEC", logo: "exotec.png" },
  { name: "PROVIEW", logo: "proview.png" },
];

const Brands = () => {
  return (
    <div className="brands-container">
      <h2 className="brands-title">
        <span className="highlight">Brand We</span> Work With
      </h2>
      <div className="brands-slider">
        <div className="brands-track">
          {brands.concat(brands).map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={`/images/${brand.logo}`} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
