import React, { useState } from 'react';
import './HeaderLayout.css';
import { FaIndustry, FaStream, FaBuilding, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface HeaderLayoutProps {
  children: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app-container">
      <aside className={`app-sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          {!collapsed && (
            <div className="logo-container">
              <img src="/logo192.png" alt="Logo" className="company-logo" />
              <span className="company-name">Passport</span>
            </div>
          )}
        </div>
        <nav className="menu">
          <ul>
            <li>
              <FaIndustry className="menu-icon" />
              {!collapsed && <Link to="/industries">Industries</Link>}
            </li>
            <li>
              <FaStream className="menu-icon" />
              {!collapsed && <Link to="/channel">Channel</Link>}
            </li>
            <li>
              <FaBuilding className="menu-icon" />
              {!collapsed && <Link to="/companies">Companies</Link>}
            </li>
          </ul>
        </nav>
      </aside>

      <main className="app-content">
        {children}
      </main>
    </div>
  );
};

export default HeaderLayout;
