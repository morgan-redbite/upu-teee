import React from 'react';
import { Recycle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Recycle className="h-8 w-8 text-emerald-600" />
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">ecoPostal</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">Services</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">About</a>
          <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;