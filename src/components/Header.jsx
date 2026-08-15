import React from 'react';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <nav className="bg-white bg-opacity-50 backdrop-blur-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">AI Agency</h1>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="text-gray-900 hover:text-primary transition-colors duration-200">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-900 hover:text-primary transition-colors duration-200">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-900 hover:text-primary transition-colors duration-200">Contact</a>
        </li>
      </ul>
      <Button className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md shadow">Get Started</Button>
    </nav>
  );
}

export default Header;
