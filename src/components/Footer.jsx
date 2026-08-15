import React from 'react';

function Footer() {
  return (
    <footer className="bg-white bg-opacity-50 backdrop-blur-md py-6 px-6 flex justify-between items-center">
      <p className="text-lg text-gray-900">2023 AI Agency. All rights reserved.</p>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="text-gray-900 hover:text-primary transition-colors duration-200">Terms of Service</a>
        </li>
        <li>
          <a href="#" className="text-gray-900 hover:text-primary transition-colors duration-200">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
