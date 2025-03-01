import React, { useEffect, useState } from 'react';
import './Awards.css';
import { assets } from '../../assets/assets';
import Consultation from '../Consultation/Consultation';

const Awards = () => {
  const awardsData = [
    { label: "Years of Experience", value: 10 },
    { label: "Projects Completed", value: 250 },
    { label: "Hours of Work", value: 50000 }
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

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">Our Achievements & Excellence</h2>
        <p className="awards-intro">
          At Mastertech, we take pride in our dedication to innovation, quality, and success. Over the years, 
          our commitment to excellence has helped us complete outstanding projects, earn prestigious certifications, 
          and accumulate a wealth of experience. Here’s a glimpse into our journey.
        </p>

        <div className="awards-stats">
          {awardsData.map((item, index) => (
            <div key={index} className="award-item">
              <h3 className="award-value">{counts[index]}+</h3>
              <p className="award-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    
  );
};

export default Awards;
