// app/api/events/route.js (suponiendo que tu ruta está en esta ubicación)

import { NextResponse } from 'next/server';

export async function GET() {

  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    console.error('Error: La variable de entorno BACKEND_URL no está definida.');
    return NextResponse.json(
      { error: 'Error interno del servidor: La URL del backend no está configurada.' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(backendUrl+"/events", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return new NextResponse(null, { status: response.status, statusText: response.statusText });
    }

    const data = await response.json();
  
    return NextResponse.json(data, { status: response.status });

  } catch (error) {
    console.error('Error al conectar con el backend de Quarkus:', error);
    return NextResponse.json([], { status: 200 });
  }
}