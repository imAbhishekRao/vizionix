import React from "react";
import natuf from "../image/natufviz.png";
import bioquench from "../image/bioquenchviz.png";
import vaidahi from "../image/vaidahi.png";
import betr from "../image/betr.png";
import studywave from "../image/studywaveviz.png";
import excel from "../image/exceldentalcareviz.png";
import stitch from "../image/stitchnsinviz.png";
import max from "../image/maxxon.png";
import Navbar from "./Navbar";
import Footer from "./footer";
import portfolioImage from "../image/portfoliobg.png"; // Add your image path here

import WhyWorkWithVizionix from "./whyworkwithus";

const styles = {
  container: {
    backgroundColor: "#F0F0F5",
    padding: "1.5em 3em",
    minHeight: "100vh",
  },
  headerImageContainer: {
    position: "relative",
    width: "100%",
    height: "300px", // Adjust height as needed
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(5px)", // Apply blur effect
  },
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#FFF",
    textAlign: "center",
    fontSize: "clamp(1.5rem, 5vw, 3em)", // Responsive font size
    fontWeight: "bold",
    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)", // Add text shadow for readability
    fontFamily: "Raleway, sans-serif",
    whiteSpace: "nowrap", // Prevent text breaking on laptop view
  },
  headerTextMobile: {
    whiteSpace: "normal", // Allow text breaking for mobile view
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  gridLaptop: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    color: "#333",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
    position: "relative",
    border: "2px solid transparent",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
    border: "2px solid #6B46C1",
    boxShadow: "0 0 20px 5px rgba(107, 70, 193, 0.5)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "0px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  description: {
    color: "#666",
    marginBottom: "15px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "#6B46C1",
    color: "#FFF",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#5A3CA6",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3em",
    marginBottom: "3em",
    flexWrap: "wrap",
  },
  textContainer: {
    flex: "1 1 45%",
    padding: "20px",
  },
  imageContainer: {
    flex: "1 1 45%",
    padding: "20px",
    textAlign: "center",
  },
  photoContainer: {
    width: "100%",
    maxWidth: "300px",  // Adjust this to control the width
    height: "auto", // Maintain aspect ratio
    margin: "0 auto", // Center the image
  },
  photoImage: {
    width: "100%",  // Make it responsive
    borderRadius: "10px",
  },
};

const ProjectCard = ({ image, title, description, demoLink }) => {
  return (
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...styles.card, textDecoration: "none" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
        e.currentTarget.style.border = styles.cardHover.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.border = "2px solid transparent";
      }}
    >
      <div>
        <img src={image} alt={`${title} preview`} style={styles.image} />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
      >
        Visit
      </a>
    </a>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: bioquench,
      title: "Bioquench",
      description: "Bioquench offers a wide range of supplements and gummies for health and wellness.",
      demoLink: "https://bioquench.in/",
    },
    {
      image: natuf,
      title: "Natuf",
      description: "Natuf brings the finest Middle Eastern deserts and FMCG products.",
      demoLink: "https://natuf.in/",
    },
    {
      image: stitch,
      title: "Stitch n Sin",
      description: "Stitch n Sin offers premium women’s clothing, both traditional and western styles.",
      demoLink: "https://stitchnsin.com/",
    },
    {
      image: vaidahi,
      title: "Vaidahi Label",
      description: "Vaidahi Label specializes in traditional women’s clothing with a focus on elegance.",
      demoLink: " https://vaidahi.in/",
    },
    {
      image: studywave,
      title: "The Study Wave",
      description: "An edtech platform that helps international students in various exams like SAT, GCSE, NAPLAN",
      demoLink: "https://thestudywave.com",
    },
    {
      image: max,
      title: "Maxxon TMT Bars",
      description: "Maxxon is a leading TMT bar manufacturer, exporting quality products globally.",
      demoLink: "https://maxxon.in/",
    },
    {
      image: excel,
      title: "Excel Dental Care",
      description: "Excel Dental Care is a dental hospital based in Bengaluru, offering world-class treatments.",
      demoLink: "https://www.exceldentalcare.in/",
    },
    {
      image: betr,
      title: "Betr India Foodworks",
      description: "Betr is a new food and beverage brand delivering unique flavors to customers.",
      demoLink: "https://betr-seven.vercel.app/",
    },
  ];

  const isMobile = window.innerWidth < 1024;

  return (
    <>
      <Navbar />
 
     <WhyWorkWithVizionix/>
     <div className="text-center text-white text-4xl font-bold pt-4 pb-4 mt-5 mb-2 bg-pink-500 font-medium">
      Our Portfolio, See the Web Projects of Vizionix
     </div>
    
      <div style={styles.container}>

       
        
        <div style={window.innerWidth >= 1024 ? styles.gridLaptop : styles.grid}>
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Why Work with Vizionix Section */}
      <Footer/>
    </>
  );
};

export default Projects;

