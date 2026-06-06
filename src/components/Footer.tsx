'use client';

import { exhibitionInfo, artists } from '@/lib/exhibition-data';
import { Palette, MapPin, Calendar, ExternalLink, MessageCircle } from 'lucide-react';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Palette className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Conexões em Cores</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Uma exposição que celebra a diversidade artística através de pinturas, 
              fotografias e artes digitais.
            </p>
            <li>
                <a
                  href="https://wa.me/5548996467423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  Obras à venda pelo WhatsApp: (48) 99646-7423
                  <MessageCircle className="h-4 w-4 text-green-400" />
                </a>
            </li>
          </div>

          {/* Artists */}
          <div>
            <h4 className="font-semibold mb-4">Artistas</h4>
            <ul className="space-y-2">
              {artists.map((artist) => (
                <li key={artist.id}>
                  <a
                    href={`#${artist.id}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {artist.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {exhibitionInfo.location.name}
                  <br />
                  {exhibitionInfo.location.address}
                  <br />
                  {exhibitionInfo.location.city}
                </span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>
                  {exhibitionInfo.openingDate} - {exhibitionInfo.endDate}
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cultura.sc.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  cultura.sc.gov.br
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              
              <li>
                <a
                  href="#hero"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Voltar ao topo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Conexões em Cores. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm text-center">
              {exhibitionInfo.institution.name} • {exhibitionInfo.institution.support.join(' • ')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
