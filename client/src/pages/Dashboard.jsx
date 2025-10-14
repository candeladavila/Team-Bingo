// src/pages/Dashboard.jsx
import React from 'react';
import DashboardComponent from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h1>Panel de datos hospitalarios</h1>
      <DashboardComponent />
    </div>
  );
}
