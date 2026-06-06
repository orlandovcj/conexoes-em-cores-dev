'use client';

import { Artist } from '@/lib/exhibition-data';
import { ArtworkCard } from './ArtworkCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ArtistSectionProps {
  artist: Artist;
}

export function ArtistSection({ artist }: ArtistSectionProps) {
  const initials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id={artist.id} className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artist Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-10 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
        >
          {/* Artist Photo */}
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20 shadow-lg">
            <AvatarImage src={artist.photoUrl} alt={artist.name} />
            <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary/20 to-accent/30 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* Artist Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-2">
              {artist.name}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{artist.nationality || artist.nationality}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm md:text-base whitespace-pre-line">
              {artist.bio}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              {artist.artworks.some(a => a.category === 'painting') && (
                <Badge variant="secondary" className="bg-pastel-sky/30 text-primary hover:bg-pastel-sky/50">
                  Pinturas
                </Badge>
              )}
              {artist.artworks.some(a => a.category === 'photography') && (
                <Badge variant="secondary" className="bg-pastel-lavender/30 text-primary hover:bg-pastel-lavender/50">
                  Fotografias
                </Badge>
              )}
              {artist.artworks.some(a => a.category === 'digital') && (
                <Badge variant="secondary" className="bg-pastel-mint/30 text-primary hover:bg-pastel-mint/50">
                  Arte Digital
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Artworks Grid with staggered reveal */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {artist.artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`artwork-reveal ${gridVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <Separator className="mt-16 md:mt-20 section-divider" />
      </div>
    </section>
  );
}
