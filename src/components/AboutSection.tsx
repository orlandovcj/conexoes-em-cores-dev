'use client';

import { exhibitionInfo } from '@/lib/exhibition-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Users, Palette, Camera, Monitor, Globe } from 'lucide-react';
import { artists } from '@/lib/exhibition-data';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AboutSection() {
  const categoryStats = {
    paintings: artists.reduce((acc, a) => acc + a.artworks.filter(art => art.category === 'painting').length, 0),
    photographs: artists.reduce((acc, a) => acc + a.artworks.filter(art => art.category === 'photography').length, 0),
    digital: artists.reduce((acc, a) => acc + a.artworks.filter(art => art.category === 'digital').length, 0),
  };

  const nationalities = [...new Set(artists.map(a => a.nationality))];

  return (
    <section id="sobre" className="py-20 md:py-28 scroll-mt-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              Sobre a Exposição
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              {exhibitionInfo.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <ScrollReveal variant="left">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {exhibitionInfo.description}
              </p>
              
              {/* Highlights */}
              <div className="space-y-3">
                {exhibitionInfo.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Card */}
          <ScrollReveal variant="right" delay={200}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Em Números</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* Artists */}
                  <div className="text-center p-4 rounded-xl bg-primary/5">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-gradient">{artists.length}</p>
                    <p className="text-sm text-muted-foreground">Artistas</p>
                  </div>

                  {/* Digital */}
                  <div className="text-center p-4 rounded-xl bg-pastel-sky/20">
                    <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                    
                    <p className="text-3xl font-bold text-gradient">{categoryStats.digital}</p>
                    <p className="text-sm text-muted-foreground">Obras Digitais</p>
                  </div>
                  

                  {/* Paintings */}
                  <div className="text-center p-4 rounded-xl bg-pastel-mint/20">
                    <Palette className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-gradient">{categoryStats.paintings}</p>
                    <p className="text-sm text-muted-foreground">Pinturas</p>
                  </div>

                  {/* Photography */}
                  <div className="text-center p-4 rounded-xl bg-pastel-lavender/20">
                    <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-gradient">{categoryStats.photographs}</p>
                    <p className="text-sm text-muted-foreground">Fotografias</p>
                  </div>

                  {/* Nacionalidades */}
                  <div className="text-center p-4 rounded-xl bg-pastel-peach/20 col-span-2">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-gradient">2</p>
                    <p className="text-sm text-muted-foreground">Nacionalidades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <Separator className="section-divider" />
      </div>
    </section>
  );
}
