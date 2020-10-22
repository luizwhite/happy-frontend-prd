import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/remind-me.css';

interface Props {
  id: string,
  checked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputLabel: string,
  linkToPage: string,
}

export default function RemindMe({ id, checked, onChange, inputLabel, linkToPage }: Props) {

  return (
    <div className="input-block">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-control"></span>
      <label htmlFor="remind-me">
        {inputLabel}
      </label>
      <Link to={linkToPage} className="forgot-password">
        Esqueci minha senha
      </Link>
    </div>
  );
}