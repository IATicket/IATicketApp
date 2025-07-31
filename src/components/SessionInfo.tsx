// components/SessionInfo.tsx
'use client';

import { useSession, signOut } from 'next-auth/react';

export default function SessionInfo() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Iniciaste sesión como {session.user?.name}</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
    );
  }

  return <p>No has iniciado sesión.</p>;
}