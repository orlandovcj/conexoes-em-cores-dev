'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { artists } from '@/lib/exhibition-data';
import { Menu, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { id: 'sobre', label: 'Sobre' },
  ...artists.map((a) => ({ id: a.id, label: a.name.split(' ')[0] })),
  { id: 'escritos', label: 'Escritos' },
  { id: 'info', label: 'Visite' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll visibility and active section
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Determine if scrolled
    setIsScrolled(currentScrollY > 50);
    
    // Determine visibility based on scroll direction
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
    
    // Determine active section using Intersection Observer-like logic
    const sections = ['hero', 'sobre', ...artists.map(a => a.id), 'escritos', 'info'];
    let currentSection = '';
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Section is considered active if it's in the upper third of the viewport
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = sectionId;
          break;
        }
      }
    }
    
    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gradient hidden sm:inline">
              Conexões em Cores
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm ${
                  activeSection === item.id
                    ? 'active text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Scroll Indicator */}
          <div className="hidden md:flex items-center gap-2 text-muted-foreground text-xs">
            {isVisible ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-gradient">Navegação</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? 'default' : 'ghost'}
                    onClick={() => scrollToSection(item.id)}
                    className={`justify-start ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : ''
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-auto text-xs opacity-70">●</span>
                    )}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
