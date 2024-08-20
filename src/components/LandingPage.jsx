import React from 'react';

export default function LandingPage() {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h2 style={styles.subtitle}>Reach new audiences</h2>
        <h2 style={styles.title}>Digital growth tailored to your business</h2>
        <p style={styles.description}>We help you reach new markets and stand out from the competition.</p>
        <a href="#" style={styles.ctaButton}>Get Started</a>
      </div>
      <div style={styles.heroImage}>
        <img 
          src="https://themes.ainoblocks.io/solarone/wp-content/uploads/sites/4/2023/02/solarone-hero-01.png" 
          alt="Hero Image" 
          style={styles.image} 
        />
      </div>
    </div>
  );
}

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px', // Reduced padding to decrease space
    backgroundColor: 'white',
    flexDirection: 'row', // Default layout is row
    flexWrap: 'wrap',
    marginTop: '0', // Ensure there's no extra space at the top
  },
  heroContent: {
    maxWidth: '50%',
    minWidth: '300px',
    marginTop: '0', // Remove extra top margin
  },
  subtitle: {
    color: '#1a73e8',
    fontSize: '24px',
    marginBottom: '10px',
    lineHeight: '1.2', // Ensure lineHeight is set
  },
  title: {
    color: '#222222',
    fontSize: '80px',
    fontWeight: 'bold',
    lineHeight: '1', // Set lineHeight to minimize space between lines
    marginBottom: '20px',
  },
  description: {
    color: '#555555',
    fontSize: '18px',
    marginBottom: '20px', // Reduced margin-bottom to minimize space
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#222222',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '5px',
  },
  heroImage: {
    maxWidth: '45%',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0', // Remove extra top margin
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  // Media queries for responsiveness
  '@media (max-width: 1024px)': {
    hero: {
      flexDirection: 'column', // Stack items on smaller screens
      textAlign: 'center',
      padding: '20px', // Further reduced padding for smaller screens
    },
    heroContent: {
      maxWidth: '100%',
      marginBottom: '20px',
      marginTop: '10px', // Adjust top margin for responsiveness
    },
    heroImage: {
      maxWidth: '100%',
      marginTop: '10px', // Adjust top margin for responsiveness
    },
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '36px', // Adjust title font size for smaller screens
      lineHeight: '1', // Ensure lineHeight is adjusted for smaller screens
    },
    subtitle: {
      fontSize: '20px', // Adjust subtitle font size for smaller screens
      lineHeight: '1.2', // Adjust lineHeight for subtitle
    },
    description: {
      fontSize: '16px', // Adjust description font size for smaller screens
    },
    ctaButton: {
      padding: '12px 24px',
      fontSize: '14px',
    },
  },
};
