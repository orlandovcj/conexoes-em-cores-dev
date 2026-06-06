'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ArtistSection } from '@/components/ArtistSection';
import { WritingSection } from '@/components/WritingSection';
import { InfoSection } from '@/components/InfoSection';
import { Footer } from '@/components/Footer';
import { artists } from '@/lib/exhibition-data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Artist Sections */}
        {artists.map((artist) => (
          <ArtistSection key={artist.id} artist={artist} />
        ))}

        {/* Writing Section */}
        <WritingSection />

        {/* Visit Info Section */}
        <InfoSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
