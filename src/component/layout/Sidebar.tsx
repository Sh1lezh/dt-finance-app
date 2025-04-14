import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaExchangeAlt, FaBookOpen, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Example icons
import logo from '../../assets/logo.png'; // Add your logo here

const Sidebar: React.FC = () => {
  const linkClasses = "flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary rounded-lg transition-colors duration-200";
  const activeLinkClasses = "bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary font-semibold"; // Adjusted active style

  // Helper to combine classes conditionally
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkClasses} ${isActive ? activeLinkClasses : ''}`;


  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <img src={logo} alt="App Logo" className="h-10 w-auto" />
        <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">FinDash</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/" className={getNavLinkClass}>
          <FaChartPie className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink to="/payments" className={getNavLinkClass}>
          <FaExchangeAlt className="mr-3" />
          Payments
        </NavLink>
        <NavLink to="/education" className={getNavLinkClass}>
          <FaBookOpen className="mr-3" />
          Education Hub
        </NavLink>
      </nav>

      {/* Footer Links (Settings, Logout) */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
         <NavLink to="/settings" className={getNavLinkClass}> {/* Example settings link */}
           <FaCog className="mr-3" />
           Settings
         </NavLink>
         <button className={`${linkClasses} w-full text-left`}> {/* Example logout button */}
           <FaSignOutAlt className="mr-3" />
           Logout
         </button>
      </div>
    </div>
  );
};

export default Sidebar;