import React from "react";
import Image1 from "../image/New 31X ROAS.jpg";
import Image3 from "../image/New Website Portfolio 6.32x ROAS.jpg";
import Image4 from "../image/Meta Portfolio 4.88x 1.jpg"
import Image5 from"../image/Meta Portfolio 3.88x 1.png"
import Image6 from"../image/Solar powe Business.jpg"
import Image7 from"../image/B2B Business.jpg"
import Image8 from"../image/Bathinda Immigration Center.jpg"
import Image9 from"../image/Real estate.png"
import Image2 from "../image/Skincare 7.21x ROAS (1).jpg"
import Navbar from "./Navbar";
import Footer from "./footer";
import FirstSection from "./FirstSection";
import SelectiveSection from "./SelectiveSection";



const AdCard = ({ image, heading, paragraph }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    marginBottom: "40px",
    flexWrap: "wrap",
  };

  const leftSectionStyle = {
    flex: "1",
    width: "100%",
  };

  const imageStyle = {
        width: "80%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        display: "block", // Ensures it's treated as a block element
        margin: "0 auto", // Centers the image horizontally
      };

  const rightSectionStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
 
  };

  const headingStyle = {
    fontSize: "1.5em",
    color: "#0d1b3e",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1em",
    lineHeight: "1.6",
    color: "#444",
  };

  return (
    <div
      className="ad-card"
      style={{
        ...containerStyle,
        flexDirection: window.innerWidth <= 768 ? "column" : "row",
      }}
    >
      <div className="left-section" style={leftSectionStyle}>
        <img src={image} alt="Ad Performance Overview" style={imageStyle} />
      </div>
      <div className="right-section" style={rightSectionStyle}>
        <h2 style={headingStyle}>{heading}</h2>
        <p style={paragraphStyle}>{paragraph}</p>
      </div>
    </div>
  );
};

const AdPerformance = () => {
        const data = [
                {
                  image: Image1,
                  heading: "From Strategy to Success: 31X ROAS for an Online Course Client",
                  paragraph:
                    "We achieved a remarkable transformation for our online course client, delivering ₹31 Lakhs in revenue from a modest ₹1 Lakh ad spend—an impressive 31X ROAS. This success story includes driving 620 purchases, showcasing our ability to generate exponential ROI. By leveraging a well-crafted strategy and precise execution, we turned their vision into measurable results, setting new benchmarks for their business growth."
            
            
            
            
            
            
            ,
                },
                {
                    image: Image2 , // Replace with your image path
                    heading: "Skincare Brand Achieves 10X Growth with 7.51X ROAS",
                    paragraph:
                      "We helped a skincare brand achieve massive growth, generating ₹15.52L in revenue from a strategic ad spend of just ₹2.15L, delivering over 2,000 purchases. With an impressive 7.51X ROAS, our expert digital marketing strategies drove 10X growth, propelling the brand to remarkable success in record time.",
                  },
                {
                  image: Image3, // Replace with your image path
                  heading: "Skincare Brand Achieves 3X Revenue Growth with Our Digital Marketing Expertise",
                  paragraph:
                  "With our tailored digital marketing strategies, we helped a skincare brand achieve massive growth, scaling their revenue from ₹6,000 to ₹38,000 in record time—a remarkable 3X growth. This success underscores our ability to unlock rapid business transformation through innovative and data-driven marketing solutions."    },
                // Add more objects here for new cards
                {
                    image: Image4, // Replace with your image path
                    heading: "Health & Wellness Brand Scaled to ₹5 Lakhs/Month with Strategic Digital Marketing",
                    paragraph:
            "In just 3 months, we transformed a health and wellness brand's performance, increasing revenue from ₹32.7K to ₹159.6K and achieving a consistent ₹5 Lakh/month turnover. With a 4X ROAS and an impressive 12% website conversion rate, our strategic digital marketing efforts unlocked exponential growth and set a strong foundation for sustainable success. "  },
            {
                    image: Image5, // Replace with your image path
                    heading: "Multivitamin Brand Scales to ₹10 Lakhs/Month with Strategic Marketing",
                    paragraph:
            "Through our targeted digital marketing approach, we scaled a multivitamin brand's revenue from ₹79K to ₹3.06 Lakhs in a short span, eventually achieving a consistent ₹10 Lakhs/month revenue. With an impressive 3.88X ROAS and a 10% website conversion rate, we delivered outstanding growth, establishing the brand as a leader in its category."
            },
            
            {
                    image: Image6, // Replace with your image path
                    heading: "Solar Panel Business Generates 750+ Leads with a Modest Budget",
                    paragraph:
            "With a limited daily budget of just ₹1,000, we empowered a solar panel business to generate over 750 leads at an impressive ₹5 CPL (Cost Per Lead). This success highlights our ability to deliver exceptional results through efficient and highly targeted marketing strategies, even with constrained resources."
            },  
            {
                    image: Image7, // Replace with your image path
                    heading: "Gas Stove B2B Client Scales with 2,600+ Leads Through Strategic Marketing",
                    paragraph:
            "By implementing a tailored marketing strategy, we helped a gas stove B2B client generate over 2,600 high-quality leads, significantly scaling their business. This achievement showcases the power of precise targeting and strategic execution in driving impactful results for B2B enterprises."
            },  
            {
                    image: Image8, // Replace with your image path
                    heading: "Achieved Outstanding Results with ₹20 CPL for Rapid Business Growth",
                    paragraph:
            "Through our focused marketing efforts, we delivered exceptional results at just ₹20 CPL (Cost Per Lead), enabling our client to grow rapidly and effectively. This success underscores our ability to drive impactful outcomes while optimizing costs for sustained business growth."},  
            {
                    image: Image9, // Replace with your image path
                    heading: "Scaling a Real Estate Business in Mohali with 212 High-Quality Leads",
                    paragraph:
            "In just one month, we helped scale a real estate business in Mohali by generating 212 high-quality leads. Our strategic approach ensured targeted outreach, driving significant growth and setting a strong foundation for continued success in the competitive real estate market."},  
            
            ];

  return (
        <>
        <Navbar/>
        <FirstSection/>

        <div className="text-center text-white text-4xl font-bold pt-4 pb-4 px-2 mt-5 mb-2 bg-pink-500 font-medium">
      Our Portfolio
     </div>
    <div className="ad-performance">
      {data.map((item, index) => (
        <AdCard
          key={index}
          image={item.image}
          heading={item.heading}
          paragraph={item.paragraph}
        />
      ))}
    </div>
    <SelectiveSection/>
    <Footer/>
    
    </>
  );
};

export default AdPerformance;
