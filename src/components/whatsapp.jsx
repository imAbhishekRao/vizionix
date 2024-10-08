import React from 'react';
import WhatsappLogo from '../image/walogo.png';

const FixedWhatsAppButton = () => {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/+919780883345?text=Hello%20Vizionix!%20I%27m%20interested%20in%20your%20marketing%20and%20web%20development%20services.%20Could%20you%20please%20provide%20more%20information%3F" // Prefilled text link
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // For security reasons
      style={styles.button}
    >
      <img
        alt="Chat on WhatsApp"
        src={WhatsappLogo}
        style={styles.image}
      />
    </a>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px', // Adjust the distance from the bottom
    right: '20px', // Adjust the distance from the right
    zIndex: 1000, // Ensures it's above other content
  },
  image: {
    width: '60px', // Default size for larger screens
    height: '60px',
  },
  '@media (max-width: 768px)': { // Media query for mobile devices
    image: {
      width: '40px', // Reduced size for smaller screens
      height: '40px',
    },
  },
};

export default FixedWhatsAppButton;
