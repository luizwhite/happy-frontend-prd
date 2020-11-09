import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/components/sideform-container.css';

interface Props {
  goBackButton: boolean;
  children: React.ReactNode;
}

export default function SideFormContainer({
  goBackButton,
  children,
}: Props): JSX.Element {
  const { goBack } = useHistory();

  return (
    <main>
      {goBackButton && (
        <button className="back-button" type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </button>
      )}
      {children}
    </main>
  );
}
