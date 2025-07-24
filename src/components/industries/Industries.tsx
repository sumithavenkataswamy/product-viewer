import React from 'react';
import Treeview from '../treeview/Treeview';
import './Industries.css';

const Industries: React.FC = () => {
  return (
    <div className="industries-container">
      <div className="industries-header">
        <h1>Industries Management</h1>
        <p>Manage your industry categories efficiently. Expand, search, and select with ease.</p>
      </div>
      <div className="industries-treeview">
        <Treeview />
      </div>
    </div>
  );
};

export default Industries;
