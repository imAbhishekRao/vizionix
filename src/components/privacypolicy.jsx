import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const PrivacyPolicy = () => {
  return (
        <>
        <Navbar/>
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for Vizionix</h1>
        <p className="mb-4">Effective Date: 15-08-2024</p>

        <p className="mb-4">
          At Vizionix, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
        <p className="mb-4">We collect the following information from you:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Contact Form Data: When you fill out the contact form on our website, we collect your name, email address, and mobile number.</li>
          <li>Newsletter Subscription: We collect your email address when you subscribe to our newsletter.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used solely for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Contacting You: We use the data provided in the contact form to reach out to you regarding your inquiries, requests, or to provide information about our services.</li>
          <li>Newsletter: We use your email address to send you our monthly newsletter, which may include updates, promotions, and news about Vizionix.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We are committed to ensuring that your information is secure. We have implemented appropriate technical and organizational measures to safeguard your personal data against unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-bold mb-2">4. Data Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties. Your data is only shared with trusted partners necessary to fulfill the purposes outlined in this policy, such as email service providers for newsletter distribution, and only under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Access Your Data: Request a copy of the personal information we hold about you.</li>
          <li>Unsubscribe: Opt-out of our newsletter at any time by clicking the unsubscribe link at the bottom of our emails.</li>
          <li>Request Deletion: Ask us to delete your personal information from our records.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">6. Cookies and Tracking</h2>
        <p className="mb-4">
          We may use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us understand how visitors interact with our site, allowing us to improve our services.
        </p>

        <h2 className="text-2xl font-bold mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any significant changes by posting the new policy on our website.
        </p>

        <h2 className="text-2xl font-bold mb-2">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or the data we collect, please contact us at:
        </p>
        <address className="mb-4">
          Vizionix<br />
          thevizionix@gmail.com<br />
          +91750857909<br />
          +919780883345 <br />
          SAS Nagar Mohali, India
        </address>

        <p className="mb-4">By using our website, you agree to the terms of this Privacy Policy.</p>
      </div>
    </div>
        <Footer/>
    </>
  );
};

export default PrivacyPolicy;
