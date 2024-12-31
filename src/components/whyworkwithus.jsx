import React from "react";

const styles = {
        whyWorkContainer: {
          backgroundColor: "#0F172A", // Dark background color
          padding: "4em 2em", // Slightly increased padding for better spacing
          color: "#FFFFFF",
          overflow: "hidden", // Ensure no overflow happens
        },
        whyWorkContent: {
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
        },
        whyWorkText: {
          flex: "1 1 70%", // Text takes up 50% of the width
        
          wordWrap: "break-word", // Ensure text doesn't overflow
          lineHeight: "1.6", // Improve readability with proper line height
        },
        whyWorkHeading: {
          fontSize: "3rem", // Increased font size for better visibility
          marginBottom: "1rem",
          color: "#FFFFFF",
          fontWeight: "700", // Make heading bold
          letterSpacing: "0.5px", // Add some letter spacing for a sleek look
        },
        accentText: {
          color: "#6366F1", // Bright blue for emphasis
        },
        paragraph: {
          fontSize: "1.1rem", // Reduced font size for sleekness
          marginBottom: "1.5rem",
          lineHeight: "1.7", // Slightly increased line height for better readability
          color: "#E5E7EB", // Lighter text color for contrast
        },
        list: {
          listStyle: "none",
          padding: "0",
        },
        listItem: {
          marginBottom: "1rem",
          fontSize: "1.1rem",
          display: "flex",
          alignItems: "start",
          color: "#E5E7EB", // Lighter text color for contrast
        },
        icon: {
          color: "#4F46E5", // Bright blue icon color
          fontSize: "1.5rem",
          marginRight: "0.5rem",
        },
        imageSection: {
          flex: "1 1 25%", // Image takes up 50% of the width
          display: "flex",
          justifyContent: "center", // Center the image
          alignItems: "center",
        },
        image: {
          maxWidth: "300px", // Ensure the image takes up full width of its container
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          height: "auto",
        },
        // Responsive styles
        '@media(max-width: 768px)': {
          whyWorkContent: {
            flexDirection: "column", // Stack text and image on smaller screens
            alignItems: "center",
          },
          whyWorkText: {
            textAlign: "center", // Center the text on smaller screens
            flex: "1 1 100%", // Take full width on mobile
          },
          whyWorkHeading: {
            fontSize: "2.2rem", // Reduce heading size on smaller screens for better fit
          },
          imageSection: {
            flex: "1 1 100%", // Image also takes full width on mobile
            marginTop: "1.5rem", // Add margin to the top for spacing
          },
          paragraph: {
            fontSize: "1rem", // Reduce font size for mobile
          },
          listItem: {
            fontSize: "1rem", // Reduce font size for mobile
          },
        },
      };

const WhyWorkWithVizionix = () => (
  <div style={styles.whyWorkContainer}>
    <div style={styles.whyWorkContent}>
      <div style={styles.whyWorkText}>
        <h2 style={styles.whyWorkHeading}>
          Why Choose <span style={styles.accentText}>Vizionix</span> for Your Website Needs
        </h2>
        <p style={styles.paragraph}>
          With years of experience, Vizionix offers cutting-edge website design, development, and marketing solutions. Our team ensures your brand stands out with custom-built, mobile-friendly websites that drive engagement and conversions. Here's why we should be your go-to partner:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.icon}>✔</span>
            <strong>Custom Website Development</strong> 
          </li>
          
          <li style={styles.listItem}>
            <span style={styles.icon}>✔</span>
            <strong>Responsive & Mobile-Friendly</strong> 
          </li>
         
          <li style={styles.listItem}>
            <span style={styles.icon}>✔</span>
            <strong>Ongoing Support & Maintenance</strong> 
          </li>
        </ul>
      </div>
      <div style={styles.imageSection}>
        <img src="https://github.com/imAbhishekRao/vizionix/blob/master/src/image/White%20and%20Red%20Coffee%20Customer%20Testimonial%20%20Reviews%20Instagram%20Post%20(1).gif?raw=true" alt="Why work with Vizionix" style={styles.image} />
      </div>
    </div>
  </div>
);

export default WhyWorkWithVizionix;
