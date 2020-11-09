import React from 'react';

import Sidebar from '../components/Sidebar';

import '../styles/pages/dashboard.css';

export default function DashboardPending() {
  const dashboard = true;
  const dashboardEntries = true;

  return (
    <div id='page-dashboard'>
      <Sidebar {...{ dashboard, dashboardEntries }} />

      <main className='content-wrapper'>
        <h1>Cadastros Pendentes</h1>
      </main>
    </div>
  );
}
