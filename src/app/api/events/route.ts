// app/api/events/route.js (suponiendo que tu ruta está en esta ubicación)

import { NextResponse } from 'next/server';

export async function GET() {
  const QUARKUS_API_URL = process.env.BACKEND_URL;
  console.log(QUARKUS_API_URL)
  try {
    const response = await fetch(QUARKUS_API_URL+"/events", {
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