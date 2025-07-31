// pages/Login.tsx
'use client';

import { signIn } from 'next-auth/react';
import styles from './Login.module.css';

export default function LoginPage() {
  const handleLogin = () => {
    signIn('keycloak', { callbackUrl: '/' });
  };

  return (
    <main className={styles.loginContainer}>
      <h1 className={styles.loginHeading}>Iniciar sesión</h1>
      <button onClick={handleLogin} className={styles.loginButton}>
        Iniciar sesión con Keycloak
      </button>
    </main>
  );
}