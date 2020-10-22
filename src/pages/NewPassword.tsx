import React, { FormEvent, useState } from 'react';

import InputBlock from '../components/InputBlock';
import LogInButton from '../components/LogInButton';
import Sidebanner from '../components/Sidebanner';
import SideFormContainer from '../components/SideFormContainer';

import '../styles/pages/login.css';

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
  }

  return(
    <div id="login-area">
      <Sidebanner />

      <SideFormContainer
        goBackButton={true}
      >
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>Redefinição de Senha</legend>

            <p>
              Escolha uma nova senha para você acessar o dashboard do Happy.
            </p>

            <InputBlock
              id="password"
              inputLabel="Nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              eyeCheck={true}
            />

            <InputBlock
              id="confirm-password"
              inputLabel="Repetir senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              eyeCheck={true}
            />
          </fieldset>

          <LogInButton>
            Redefinir
          </LogInButton>
        </form>

      </SideFormContainer>
    </div>
  );
}