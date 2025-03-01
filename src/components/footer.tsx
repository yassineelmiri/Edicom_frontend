import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">About Edicom Maroc</h3>
            <p className="text-gray-300">
              We are a leading digital agency providing innovative solutions to enhance your online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-300 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-300 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@edicom.ma</p>
            <p className="text-gray-300">Phone: +212 5 22 33 44 55</p>
            <p className="text-gray-300">Address: Casablanca, Morocco</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Edicom Maroc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;