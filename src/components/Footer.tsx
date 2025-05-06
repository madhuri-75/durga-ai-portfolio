
/**
 * Footer.tsx
 * 
 * The Footer component appears at the bottom of the portfolio website.
 * It contains copyright information and attribution.
 * 
 * @author Madhuri Sri Durga Visali Perumalla
 */

import React from 'react';

/**
 * Footer component with copyright information
 * @returns {JSX.Element} The rendered Footer
 */
const Footer = () => {
  return (
    <footer className="bg-navy py-6 text-center text-sm text-slate">
      <div className="max-w-7xl mx-auto px-4">
        <p>Designed & Built by Madhuri Sri Durga Visali Perumalla</p>
        {/* Dynamic copyright year that updates automatically */}
        <p className="mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
