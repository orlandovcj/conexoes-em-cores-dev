'use client';

import { getCategoryLabel } from '@/lib/exhibition-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Ruler, Palette } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  category: 'painting' | 'photography' | 'digital';
}

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="artwork-card group relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-lg">
      {/* Image Container with Film Grain */}
      <div className="film-grain-overlay relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        {/* Real Image - Colorida por padrão, grayscale no hover */}
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="artwork-image object-cover w-full h-full"
        />
        
        {/* Hover Overlay */}
        <div className="artwork-overlay absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/85 to-primary/60 backdrop-blur-sm">
          <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
            {/* Category Badge */}
            <Badge 
              variant="secondary" 
              className="self-start mb-2 bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              {getCategoryLabel(artwork.category)}
            </Badge>
            
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2 line-clamp-2">{artwork.title}</h4>
            
            {/* Details */}
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{artwork.year}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Palette className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="line-clamp-1">{artwork.technique}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Ruler className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{artwork.dimensions}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="mt-3 text-sm text-white/85 line-clamp-3 leading-relaxed">
              {artwork.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Card Footer - Always visible */}
      <div className="p-3 bg-card">
        <h4 className="font-medium text-sm text-foreground truncate">{artwork.title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{getCategoryLabel(artwork.category)} • {artwork.year}</p>
      </div>
    </Card>
  );
}
