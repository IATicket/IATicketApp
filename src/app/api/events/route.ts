
import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    {
      id: 1,
      title: 'Rock en Vivo',
      date: '2025-08-10',
      location: 'Medellin , Colombia',
      description: 'Una noche épica de rock con bandas legendarias.',
      imageUrl: '/images/rock.png',
    },
    {
      id: 2,
      title: 'Festival de Jazz',
      date: '2025-09-15',
      location: 'Madrid, Cundinamarca',
      description: 'El mejor jazz en vivo bajo las estrellas.',
      imageUrl: '/images/jazz.png',
    },
    {
      id: 3,
      title: 'Pop Party',
      date: '2025-10-01',
      location: 'Bogotá, Colombia',
      description: 'Una fiesta inolvidable con los mejores artistas pop.',
      imageUrl: '/images/pop.jpg',
    },
  ];

  return NextResponse.json(events);
}
