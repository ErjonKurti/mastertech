import React from "react";
import "./Brands.css";
import { assets } from "../../assets/assets.js";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();
  const duplicatedBrands = [...assets.brands, ...assets.brands];

  return (
    <div className="brands-container">
      <h2 className="brands-title">
        <span className="highlight2">{t("brandWeWorkWith", { defaultValue: "Brand We Work With" })}</span>
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
