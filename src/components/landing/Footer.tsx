import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#282839] mt-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#9CA3AF]">© 2024 ReviewFlow. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="text-sm text-[#9CA3AF] hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-sm text-[#9CA3AF] hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="text-sm text-[#9CA3AF] hover:text-white transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
