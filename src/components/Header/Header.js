
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { assets } from '../../assets/assets';
import './Header.css';

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

    
        const handleVideoEnd = () => {
            if (video) {
                video.currentTime = 0; 
                video.play(); 
            }
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            if (video) {
                video.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, []);

    return (
        <header className="header">
            <video
                src={assets.video2}
                autoPlay
                muted
                loop
                ref={videoRef}
                className="header-bg-video"
            />
            <div className="header-content">
                <h1 className='header-h1'>MASTERTECH</h1>
                <p className='header-p'>Electrical, Camera, Alarms, Access Control, Audio, IT</p>
            </div>
        </header>
    );
};

export default Header;
