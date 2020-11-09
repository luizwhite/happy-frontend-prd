import React, { FormEvent, useState } from 'react';

import InputBlock from '../components/InputBlock';
import LogInButton from '../components/LogInButton';
import Sidebanner from '../components/Sidebanner';
import SideFormContainer from '../components/SideFormContainer';

import '../styles/pages/login.css';

export default function PasswordReset(): JSX.Element {
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div id="login-area">
      <Sidebanner />

      <SideFormContainer goBackButton>
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>Esqueci a senha</legend>

            <p>
              Sua redefinição de senha será enviada para o e-mail cadastrado.
            </p>

            <InputBlock
              id="email"
              inputLabel="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <LogInButton>Enviar</LogInButton>
        </form>
      </SideFormContainer>
    </div>
  );
}
