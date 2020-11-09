import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import OrphanageCard from '../components/OrphanageCard';

import '../styles/pages/dashboard.css';
import api from '../services/api';

interface Orphanage {
  id: string;
  latitude: string;
  longitude: string;
  name: string;
}

export default function Dashboard(): JSX.Element {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const dashboard = true;

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-dashboard">
      <Sidebar {...{ dashboard }} />

      <main className="content-wrapper">
        <h1>Orfanatos Cadastrados</h1>

        <div className="cards-wrapper">
          {orphanages.map((orphanage) => (
            <OrphanageCard
              key={orphanage.id}
              latitude={parseFloat(orphanage.latitude)}
              longitude={parseFloat(orphanage.longitude)}
              name={orphanage.name}
              OId={orphanage.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
