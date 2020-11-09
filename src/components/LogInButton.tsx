import React from 'react';

import '../styles/components/login-button.css';

interface Props {
  children: React.ReactNode;
}

export default function LogInButton({ children }: Props): JSX.Element {
  return (
    <button className="login-button" type="submit">
      {children}
    </button>
  );
}
