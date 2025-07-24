import React from 'react';
import Treeview from '../treeview/Treeview';
import './Industries.css';
import PageLayout from '../page-layout/PageLayout';
import type { TreeNode } from '../models/TreeNode';

const Industries: React.FC = () => {
  const data: TreeNode[] = [
    {
      id: '1',
      label: 'Industries',
      children: [
        {
          id: '1-1',
          label: 'Appliances and Electronics',
          children: [
            {
              id: '1-1-1',
              label: 'Consumer Appliances',
              children: [
                {
                  id: '1-1-1-1',
                  label: 'Major Appliances',
                  children: [
                    { id: '1-1-1-1-1', label: 'Built-In Major Appliances' },
                    { id: '1-1-1-1-2', label: 'Freestanding Major Appliances' },
                  ],
                },
                {
                  id: '1-1-1-2',
                  label: 'Small Appliances',
                  children: [
                    { id: '1-1-1-2-1', label: 'Kitchen Appliances' },
                    { id: '1-1-1-2-2', label: 'Personal Care Appliances' },
                  ],
                },
              ],
            },
            {
              id: '1-1-2',
              label: 'Electronics',
              children: [
                { id: '1-1-2-1', label: 'Televisions' },
                { id: '1-1-2-2', label: 'Audio Systems' },
                { id: '1-1-2-3', label: 'Computers & Laptops' },
              ],
            },
          ],
        },
        {
          id: '1-2',
          label: 'Automotive',
          children: [
            {
              id: '1-2-1',
              label: 'Vehicles',
              children: [
                { id: '1-2-1-1', label: 'Cars' },
                { id: '1-2-1-2', label: 'Motorcycles' },
                { id: '1-2-1-3', label: 'Electric Vehicles' },
              ],
            },
            {
              id: '1-2-2',
              label: 'Parts & Accessories',
              children: [
                { id: '1-2-2-1', label: 'Tires & Wheels' },
                { id: '1-2-2-2', label: 'Batteries' },
              ],
            },
          ],
        },
        {
          id: '1-3',
          label: 'Healthcare',
          children: [
            {
              id: '1-3-1',
              label: 'Medical Devices',
              children: [
                { id: '1-3-1-1', label: 'Diagnostic Equipment' },
                { id: '1-3-1-2', label: 'Surgical Instruments' },
              ],
            },
            {
              id: '1-3-2',
              label: 'Pharmaceuticals',
              children: [
                { id: '1-3-2-1', label: 'Prescription Drugs' },
                { id: '1-3-2-2', label: 'OTC Drugs' },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <PageLayout
    title="Industries Management"
    description="Manage your industry categories efficiently. Expand, search, and select with ease."
  >
    <Treeview data={data}/>
  </PageLayout>
  );
};

export default Industries;
