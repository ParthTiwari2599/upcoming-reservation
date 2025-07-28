import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-3 px-4 w-full fixed bottom-0 left-0 z-50 shadow-inner">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TableReserve. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Made with ❤️ by Parth Tiwari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
