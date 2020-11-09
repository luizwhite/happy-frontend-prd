import React from 'react';
import { FiArrowLeft, FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

export default function Sidebar({
  dashboard = false,
  dashboardEntries = false,
}: {
  dashboard?: boolean;
  dashboardEntries?: boolean;
}) {
  const { goBack, push } = useHistory();
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  return (
    <aside className='app-sidebar'>
      <img src={mapMarkerImg} alt='Happy' />

      {!dashboard ? (
        <footer>
          <button type='button' onClick={goBack}>
            <FiArrowLeft size={24} color='#FFF' />
          </button>
        </footer>
      ) : (
        <>
          <div className='middle-buttons'>
            <button
              className={!dashboardEntries ? 'current-page-button' : ''}
              type='button'
              onClick={dashboardEntries ? () => push('/dashboard') : () => {}}
            >
              <FiMapPin size={24} />
            </button>
            <button
              className={dashboardEntries ? 'current-page-button' : ''}
              type='button'
              onClick={
                !dashboardEntries ? () => push('/dashboard/pending') : () => {}
              }
            >
              <FiAlertCircle size={24} />
            </button>
          </div>

          <footer>
            <button type='button' onClick={handleLogout}>
              <FiPower size={24} color='#FFF' />
            </button>
          </footer>
        </>
      )}
    </aside>
  );
}
