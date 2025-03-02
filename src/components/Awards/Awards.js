import React, { useEffect, useState } from 'react';
import './Awards.css';
import { assets } from '../../assets/assets';
import Consultation from '../Consultation/Consultation';
import { useTranslation } from 'react-i18next';

const Awards = () => {
  const awardsData = [
    { label: "years_experience", value: 10 },
    { label: "projects_completed", value: 250 },
    { label: "hours_of_work", value: 50000 }
  ];

  const [counts, setCounts] = useState(awardsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) =>
          count < awardsData[index].value
            ? count + Math.ceil(awardsData[index].value / 100)
            : awardsData[index].value
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">
          {t("awards_title2", { defaultValue: "Our Achievements & Excellence" })}
        </h2>
        <p className="awards-intro">
          {t("awards_intro2", {
            defaultValue: "At Mastertech, we take pride in our dedication to innovation, quality, and success. Over the years, our commitment to excellence has helped us complete outstanding projects, earn prestigious certifications, and accumulate a wealth of experience. Here’s a glimpse into our journey."
          })}
        </p>

        <div className="awards-stats">
          {awardsData.map((item, index) => (
            <div key={index} className="award-item">
              <h3 className="award-value">{counts[index]}+</h3>
              <p className="award-label">{t(`award_${item.label}2`, { defaultValue: item.label })}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
