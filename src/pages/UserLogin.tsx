import React, { FormEvent, useState } from 'react';
import InputBlock from '../components/InputBlock';
import LogInButton from '../components/LogInButton';
import RemindMe from '../components/RemindMe';
import Sidebanner from '../components/Sidebanner';
import SideFormContainer from '../components/SideFormContainer';
import { useAuth } from '../contexts/auth';

import '../styles/pages/login.css';

export default function UserLogin(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remindMe, setRemindMe] = useState(true);

  const { signIn } = useAuth();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    signIn({ email, password });

    // Lembrar-me ? LocalStorage : SessionStorage

    // const res = await api.post('authenticate', {
    //   email,
    //   password,
    //   admin: email === 'luizbapmarques@gmail.com' ? true : false
    // });
  }

  return (
    <div id="login-area">
      <Sidebanner />

      <SideFormContainer goBackButton>
        <form onSubmit={handleSubmit} className="login-form remind-me">
          <fieldset>
            <legend>Fazer Login</legend>

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

            <RemindMe
              id="remind-me"
              checked={remindMe}
              onChange={(e) => setRemindMe(e.target.checked)}
              inputLabel="Lembrar-me"
              linkToPage="/login/password-reset"
            />
          </fieldset>

          <LogInButton>Entrar</LogInButton>
        </form>
      </SideFormContainer>
    </div>
  );
}
