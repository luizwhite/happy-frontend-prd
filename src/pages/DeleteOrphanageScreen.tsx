import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/delete-orphanage.css';

interface OrphanageParams {
  id: string;
}

interface Orphanage {
  id: string;
  name: string;
}

function DeleteOrphanageScreen(): JSX.Element {
  const { push, goBack } = useHistory();
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();

  function handleDeleteOrphanage() {
    api.delete(`orphanages/${params.id}`).then(() => {
      push('/dashboard');
    });
  }

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando..</p>;
  }

  return (
    <div id="page-delete-orphanage">
      <div className="content-wrapper">
        <main>
          <h1>Excluir!</h1>
          <p>{`Você tem certeza que quer excluir ${orphanage.name}?`}</p>
          <button type="button" onClick={handleDeleteOrphanage}>
            Sim!
          </button>
          <button type="button" onClick={goBack}>
            Não, volte para o dashboard
          </button>
        </main>
      </div>
    </div>
  );
}

export default DeleteOrphanageScreen;
