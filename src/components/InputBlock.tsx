/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import '../styles/components/input-block.css';

import eye from '../images/eye.png';
import eyeOff from '../images/eye-off.png';

interface Props {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputLabel: string;
  eyeCheck?: boolean;
}

export default function InputBlock({
  id,
  value,
  onChange,
  inputLabel,
  eyeCheck = false,
}: Props): JSX.Element {
  const [eyeHidePassword, setEyeHidePassword] = useState(true);

  return (
    <div className="input-block">
      <label htmlFor={id}>{inputLabel}</label>
      <input id={id} value={value} onChange={onChange} />

      {eyeCheck && (
        <div
          role="button"
          tabIndex={0}
          className="eye-container"
          onClick={() => setEyeHidePassword(!eyeHidePassword)}
        >
          <img src={eyeHidePassword ? eye : eyeOff} alt="mostrar" />
        </div>
      )}
    </div>
  );
}
