'use client';

import { exhibitionInfo } from '@/lib/exhibition-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Ticket, 
  Building2, 
  Heart 
} from 'lucide-react';

export function InfoSection() {
  return (
    <section id="info" className="py-20 md:py-28 scroll-mt-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              Informações
            </Badge>
            <h2 className="fluid-heading-1 font-bold mb-6 text-gradient">
              Venha Visitar
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Location Card */}
          <ScrollReveal variant="left" delay={100}>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Localização</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">{exhibitionInfo.location.name}</p>
                    <p className="text-muted-foreground text-sm">{exhibitionInfo.location.hall}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-accent/30 border border-border">
                    <p className="text-foreground">{exhibitionInfo.location.address}</p>
                    <p className="text-muted-foreground">{exhibitionInfo.location.city}</p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://maps.google.com/?q=R.+Ten.+Silveira,+343+-+Centro,+Florianópolis+-+SC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Ver no Mapa
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Schedule Card */}
          <ScrollReveal variant="right" delay={200}>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Quando Visitar</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Opening */}
                  <div className="p-4 rounded-lg bg-pastel-sky/20 border border-primary/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium">Abertura</span>
                    </div>
                    <p className="text-foreground font-semibold">{exhibitionInfo.openingDate}</p>
                    <p className="text-muted-foreground text-sm">{exhibitionInfo.openingTime}</p>
                  </div>

                  {/* Duration */}
                  <div className="p-4 rounded-lg bg-pastel-mint/20 border border-primary/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Período de Visitação</span>
                    </div>
                    <p className="text-foreground font-semibold">Até {exhibitionInfo.endDate}</p>
                  </div>

                  {/* Free Entry */}
                  <div className="p-4 rounded-lg bg-pastel-lavender/20 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <Ticket className="h-5 w-5 text-primary" />
                      <span className="font-medium">Entrada Gratuita</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Institution Info */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-5 w-5" />
                <span className="text-sm">{exhibitionInfo.institution.name}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-pastel-pink" />
                <span className="text-sm">
                  Com apoio da {exhibitionInfo.institution.support[0]} e {exhibitionInfo.institution.support[1]}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
