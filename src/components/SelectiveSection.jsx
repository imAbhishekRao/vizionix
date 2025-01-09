import React from "react";

const SelectiveSection = () => {
  const styles = {
    container: {
      backgroundColor: "#0e1a36",
      color: "#ffffff",
      padding: "50px 20px",
      textAlign: "center",
    },
    title: {
      fontSize: "3em",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "1rem",
      marginTop: "10px",
      color: "#ccc",
    },
    contentWrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "40px",
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#f1f5fe",
      color: "#000",
      borderRadius: "10px",
      padding: "20px",
      flex: "1 1 300px",
      maxWidth: "400px",
      textAlign: "left",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "15px",
      textAlign: "center",
    },
    list: {
      listStyle: "none",
      paddingLeft: "0",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    icon: {
      marginRight: "10px",
      fontSize: "1.2rem",
    },
    checkIcon: {
      color: "#4caf50",
    },
    crossIcon: {
      color: "#f44336",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        We’re Selective For A <span style={{ color: "#6f76e4" }}>Reason.</span>
      </h2>
      <p style={styles.subtitle}>
        The Reality Is We Are <strong>NOT</strong> A Good Fit For Most Businesses...
      </p>
      <div style={styles.contentWrapper}>
        {/* We Can Help Section */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>We Can Help</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.checkIcon }}>✔</span>
              E-com Stores, Service-Based Businesses and Coaches who want MORE
              predictable and consistent sales or leads from FB ads.
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.checkIcon }}>✔</span>
              E-com Stores, Service-Based Businesses, and Coaches who are not
              achieving their desired ROI and are looking to SCALE.
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.checkIcon }}>✔</span>
              E-com Stores, Service-Based Businesses, and Coaches who’ve been
              burned by other agencies or inexperienced freelancers and are
              willing to trust our expertise and give us full control to do our
              best work.
            </li>
          </ul>
        </div>
        {/* We Can't Help Section */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>We Can't Help</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.crossIcon }}>✖</span>
              Struggling new businesses that can’t trust our expertise and will
              micromanage us. We’re probably not the best fit for you.
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.crossIcon }}>✖</span>
              Businesses that only care about a high ROAS and great soft
              metrics. We only work with companies that ACTUALLY want to scale
              their entire business and revenue.
            </li>
            <li style={styles.listItem}>
              <span style={{ ...styles.icon, ...styles.crossIcon }}>✖</span>
              Businesses that advertise adult or shady products. We only help
              businesses who provide real value to their customers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectiveSection;
