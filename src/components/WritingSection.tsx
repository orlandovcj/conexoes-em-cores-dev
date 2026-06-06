'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Quote, PenTool } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

// Poemas e textos inspiradores para cada artista
const writings = [
  {
    artistId: 'orlando-castro',
    artistName: 'Orlando Castro',
    quote: "A maior parte do tempo, a beleza se esconde nas coisas mais simples. Assim deve ser a arte. Não busco entregar algo definitivo, mas algo que desperte a imaginação de quem contempla o esboço.",
    poem: ``,
  },
  {
    artistId: 'alessandra-rodrigues',
    artistName: 'Alessandra Rodrigues',
    quote: "A arte e a música são a minha alma que se revela por meio das cores e das formas, conduzindo o meu sonho de liberdade e leveza.",
    poem: ``,
  },
  
  {
    artistId: 'kamalini-nazareth',
    artistName: 'Kamalini Nazareth',
    quote: "A convivência com outros artistas e as frequentes apresentações em teatros aguçaram meu interesse pela arte, levando-me a explorar a dança, o teatro, a poesia e as artes plásticas.",
    poem: ``,
  },
  {
    artistId: 'wesley-carvalho',
    artistName: 'Wesley Carvalho',
    quote: "Em cada traço, busco transmitir sensibilidade, precisão e identidade, sempre em busca de aprimoramento e novos desafios criativos.",
    poem: ``,
  },
];

export function WritingSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="escritos" className="py-20 md:py-28 scroll-mt-20 bg-gradient-to-b from-accent/10 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'revealed' : ''}`}
        >
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            <PenTool className="h-3.5 w-3.5 mr-1.5" />
            Escritos
          </Badge>
          <h2 className="fluid-heading-1 font-bold mb-6 text-gradient">
            Palavras dos Artistas
          </h2>
          <p className="fluid-body text-muted-foreground max-w-2xl mx-auto">
            Além das telas e lentes, os artistas expressam suas visões através de palavras.
            Aqui compartilhamos reflexões e poemas que revelam a essência poética por trás de cada obra.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mt-8" />
        </div>

        {/* Writings Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {writings.map((writing, index) => (
            <div
              key={writing.artistId}
              className={`scroll-reveal ${gridVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="writing-card rounded-2xl overflow-hidden h-full">
                <CardContent className="p-6 md:p-8">
                  {/* Artist Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-white font-semibold text-sm">
                      {writing.artistName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{writing.artistName}</h3>
                      <p className="text-xs text-muted-foreground">Artista</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-4 border-l-2 border-primary/30 mb-6">
                    <Quote className="absolute -left-2 -top-1 h-5 w-5 text-primary/30" />
                    <p className="quote-text text-muted-foreground italic leading-relaxed">
                      {writing.quote}
                    </p>
                  </div>
                 
                  {/* Poem 
                  <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-5 relative">
                    <div className="absolute top-3 left-4 text-5xl text-primary/10 font-serif leading-none">"</div>
                    <pre className="quote-text text-foreground/90 whitespace-pre-wrap font-serif text-sm md:text-base leading-relaxed relative z-10">
                      {writing.poem}
                    </pre>
                  </div>
                  */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <Separator className="mt-16 md:mt-20 section-divider" />
      </div>
    </section>
  );
}
