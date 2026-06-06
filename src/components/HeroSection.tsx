'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { exhibitionInfo } from '@/lib/exhibition-data';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import { artists } from '@/lib/exhibition-data';
import { ScrollReveal } from '@/components/ScrollReveal';

export function HeroSection() {
  const scrollToArtists = () => {
    const firstArtist = document.getElementById(artists[0].id);
    if (firstArtist) {
      firstArtist.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Get base path from Next.js config or use empty string for dev
  const basePath = process.env.NODE_ENV === 'production' ? '/conexoes-em-cores' : '';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${basePath}/images/hero-bg.png)` }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-black/40" />

      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pastel-sky/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-mint/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal delay={0}>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm bg-white/10 text-white border-white/20"
            >
              Exposição de Arte Contemporânea
            </Badge>
          </ScrollReveal>

          {/* Title - Fluid Typography */}
          <ScrollReveal delay={100}>
            <h1 className="fluid-display font-bold mb-4 tracking-tight">
              <span className="text-white">{exhibitionInfo.title}</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle - Fluid Typography */}
          <ScrollReveal delay={200}>
            <p className="fluid-body text-white/90 mb-8 max-w-2xl mx-auto">
              {exhibitionInfo.subtitle}
            </p>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <ScrollReveal delay={300}>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
                <Calendar className="h-5 w-5 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Período</p>
                  <p className="font-semibold text-sm text-white">{exhibitionInfo.openingDate}</p>
                </div>                
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
                <Clock className="h-5 w-5 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Horário</p>
                  <p className="font-semibold text-sm text-white">{exhibitionInfo.openingTime}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/70">Local</p>
                  <p className="font-semibold text-sm text-white truncate max-w-[150px]">{exhibitionInfo.location.city}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Artists Preview */}
          <ScrollReveal delay={600}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {artists.map((artist) => (
                <Badge
                  key={artist.id}
                  variant="outline"
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white border-white/20"
                >
                  {artist.name}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={700}>
            <Button
              size="lg"
              onClick={scrollToArtists}
              className="gradient-blue text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg rounded-full"
            >
              Explorar Obras
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}