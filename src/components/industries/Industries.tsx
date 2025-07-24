import React from 'react';
import Treeview from '../treeview/Treeview';
import './Industries.css';
import PageLayout from '../page-layout/PageLayout';

const Industries: React.FC = () => {
  return (
    <PageLayout
    title="Industries Management"
    description="Manage your industry categories efficiently. Expand, search, and select with ease."
  >
    <Treeview />
  </PageLayout>
  );
};

export default Industries;
