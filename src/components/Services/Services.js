import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaVideo, FaUnlockAlt, FaBolt } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { GiAlarmClock } from 'react-icons/gi';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();

    return (
        <section className="section1">
            <div className="section1-content">
                <h2 className="section1-heading">{t('servicesTitle', { defaultValue: 'Our Services' })}</h2>
                <p className="section1-description">
                    {t('servicesDescription', { defaultValue: 'We offer professional installation and maintenance for security, access control, smart home, and IT solutions.' })}
                </p>
                <div className="services">
                    <div className="service-card-1">
                        <FaVideo className="service-icon" />
                        <h3 className='service-card-h3'>{t('securitySystems', { defaultValue: 'Security Systems' })}</h3>
                        <p className='service-card-p'>
                            {t('securityDescription', { defaultValue: 'Professional installation of surveillance cameras and alarm systems for enhanced security.' })}
                        </p>
                    </div>
                    <div className="service-card-2">
                        <FaBolt className="service-icon" />
                        <h3 className='service-card-h3'>{t('accessControlSmartHome', { defaultValue: 'Access Control & Smart Home' })}</h3>
                        <p className='service-card-p'>
                            {t('accessControlDescription', { defaultValue: 'Advanced access control systems and smart home automation for convenience and security.' })}
                        </p>
                    </div>
                    <div className="service-card-3">
                        <MdComputer className="service-icon" />
                        <h3 className='service-card-h3'>{t('itSolutions', { defaultValue: 'Electrical & IT Solutions' })}</h3>
                        <p className='service-card-p'>
                            {t('itDescription', { defaultValue: 'Reliable electrical installations and IT networking solutions tailored to your needs.' })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
