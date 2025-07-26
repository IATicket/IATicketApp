// src/app/page.tsx

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import EventList from '@/components/EventList';
import About from '@/components/About';
import Contact from '@/components/Contact';
import NewsFeed from '@/components/NewsFeed';
import Cities from '@/components/Cities';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Banner />
      <section id="eventos" className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <EventList />
      </section>
      <NewsFeed />
      <Cities/>
      <About />
      <Contact/>
    </div>
  );
}
