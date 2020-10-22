import React, { FormEvent, useState } from 'react';
import InputBlock from '../components/InputBlock';
import LogInButton from '../components/LogInButton';
import RemindMe from '../components/RemindMe';
import Sidebanner from '../components/Sidebanner';
import SideFormContainer from '../components/SideFormContainer';

import '../styles/pages/login.css';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remindMe, setRemindMe] = useState(true);
  /* 
  const [pwHasValue, setPwHasValue] = useState(false);
  const [emailHasValue, setEmailHasValue] = useState(false);
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
  }
  /* 
  useEffect(() => {
    if (email.length > 0) {
      setEmailHasValue(true);
    } else {
      setEmailHasValue(false);
    }
    if (password.length > 0) {
      setPwHasValue(true);
    } else {
      setPwHasValue(false);
    }
    console.log(`${emailHasValue},${pwHasValue}`);
  }, [email.length,password.length]);
   */
  return(
    <div id="login-area">
      <Sidebanner />

      <SideFormContainer
        goBackButton={true}
      >
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

          <LogInButton>
            Entrar
          </LogInButton>
        </form>

      </SideFormContainer>
    </div>
  );
}