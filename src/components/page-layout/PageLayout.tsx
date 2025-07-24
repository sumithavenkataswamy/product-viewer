import React from 'react';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </header>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
