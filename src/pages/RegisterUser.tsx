import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputBlock from '../components/InputBlock';
import LogInButton from '../components/LogInButton';
import Sidebanner from '../components/Sidebanner';
import SideFormContainer from '../components/SideFormContainer';
import api from '../services/api';

import '../styles/pages/login.css';

export default function RegisterUser(): JSX.Element {
  const { push } = useHistory();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await api.post('register', { username, email, password });
    push('/login');
  }

  return (
    <div id="login-area">
      <Sidebanner />

      <SideFormContainer goBackButton>
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>Registre-se</legend>

            <InputBlock
              id="username"
              inputLabel="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputBlock
              id="email"
              inputLabel="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputBlock
              id="password"
              inputLabel="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <LogInButton>Enviar</LogInButton>
        </form>
      </SideFormContainer>
    </div>
  );
}
