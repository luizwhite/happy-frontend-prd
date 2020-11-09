import React from 'react';

import '../styles/components/sidebanner.css';

import logoImg from '../images/logotipo.png';

export default function Sidebanner(): JSX.Element {
  return (
    <aside className="login-sidebar">
      <img src={logoImg} alt="Happy" />

      <div className="location">
        <strong>Campinas</strong>
        <span>São Paulo</span>
      </div>
    </aside>
  );
}
