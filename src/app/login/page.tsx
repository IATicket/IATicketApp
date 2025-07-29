'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push('/event-detail');
  }

  return (
    <main className={styles.loginContainer}>
      <h1 className={styles.loginHeading}>Iniciar sesión</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles.loginButton}>
          Entrar
        </button>
      </form>
    </main>
  );
}
