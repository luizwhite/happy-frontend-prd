import React from 'react';
import { useAuth } from '../contexts/auth';

import AdminRoutes from './app.routes';
import PublicRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000',
        }}
      >
        Loading...
      </div>
    );
  }

  return signed ? <AdminRoutes /> : <PublicRoutes />;
};

export default Routes;
