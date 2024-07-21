// FooterComponent.js
import React from 'react';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="contact-info">
        <p>KUMARAGURU COLLEGE OF TECHNOLOGY</p>
        <p>COIMBATORE</p>
        <p>Email: info@college.edu | Phone: (123) 456-7890</p>
      </div>
      <p> &copy; {new Date().getFullYear()} College Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
