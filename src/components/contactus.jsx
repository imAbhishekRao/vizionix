import React, { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import Footer from '../components/footer'; // Adjust the path if necessary
import FixedWhatsAppButton from "./whatsapp";

const ContactForm = () => {
  const formContainerRef = useRef(null);
  const gradientFormRef = useRef(null);
  const contactDetailsContainerRef = useRef(null);
  const gradientContactDetailsRef = useRef(null);

  useEffect(() => {
    if (formContainerRef.current && gradientFormRef.current) {
      gradientFormRef.current.style.height = `${formContainerRef.current.offsetHeight}px`;
    }
    if (contactDetailsContainerRef.current && gradientContactDetailsRef.current) {
      gradientContactDetailsRef.current.style.height = `${contactDetailsContainerRef.current.offsetHeight}px`;
    }
  }, []);

  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      <FixedWhatsAppButton /> {/* Include the FixedWhatsAppButton component here */}
      
      {/* Gradient Divider */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1"></div>
      
      {/* New Heading Section */}
      <div className="text-center py-6">
        <h1 className="text-5xl font-bold text-black mb-4 relative">
          <span className="relative z-10">Every Success Begins with a Simple Hello</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-400 opacity-60 blur-md mx-72 h-16"></div>
        </h1>
      </div>

      <div className="min-h-screen bg-white-900 py-6 flex flex-col sm:flex-row justify-center sm:py-12">
        {/* Form Section */}
        <div className="relative py-3 sm:max-w-xl sm:mx-auto sm:flex-1" ref={formContainerRef}>
          <div
            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            ref={gradientFormRef}
          ></div>
          <div className="relative px-4 py-10 bg-pink-500 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-white text-center pb-6">
              <h1 className="text-4xl">Contact Us!</h1>
              <p className="text-gray-200 text-lg">
                Fill up the form to get a callback.
              </p>
            </div>

            <form action="https://fabform.io/f/IlA0UCq" method="post">
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="text"
                placeholder="Mobile Number"
                name="mobile"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 appearance-none border rounded h-64 w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                placeholder="Type your message here..."
                name="message"
                style={{ height: "150px" }}
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline text-lg"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline text-lg"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="relative py-3 sm:max-w-xl sm:mx-auto sm:flex-1 mt-6 sm:mt-0 sm:ml-6" ref={contactDetailsContainerRef}>
          <div
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            ref={gradientContactDetailsRef}
          ></div>
          <div className="relative px-4 py-10 bg-green-500 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-white text-center pb-6">
              <h1 className="text-4xl">Our Contact Details</h1>
              <p className="text-gray-200 text-lg">You can reach us through the following:</p>
            </div>

            <div className="space-y-6 text-2xl">
          <p>  <a href="tel:+917508857909">
                <strong>Phone:</strong>+917508857909
                </a></p>
                  <p>
                <a href="tel: +919780883345">
                <strong>Phone:</strong> +91 9780883345
                </a>
                  </p>
                  
              <p>
              <a href="mailto: info@vizionix.live">
                <strong>Email:</strong> info@vizionix.live
                </a>
              </p>

              <p>
                <FaInstagram className="inline mr-3 text-3xl" />
                <a
                  href="https://www.instagram.com/thevizionix/"
                  className="text-black-100 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @thevizionix
                </a>
              </p>

              <p>
                <FaFacebook className="inline mr-3 text-3xl" />
                <a
                  href="https://www.facebook.com/profile.php?id=61565175035180"
                  className="text-black-100 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Vizionix Media Solutions
                </a>
              </p>

              <p>
                <FaLinkedin className="inline mr-3 text-3xl" />
                <a
                  href="https://www.linkedin.com/company/vizionix-media-solutions/"
                  className="text-black-100 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vizionix Media Solutions
                </a>
              </p>

              <p>
                <FaTwitter className="inline mr-3 text-3xl" />
                <a
                  href="https://x.com/thevizionix"
                  className="text-black-100 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 thevizionix
                </a>
              </p>
              <p>
                <strong>Address:</strong> SAS Nagar, Mohali, Punjab, India
              </p>
            </div>
          </div>
        </div>
      </div>
        <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default ContactForm;
