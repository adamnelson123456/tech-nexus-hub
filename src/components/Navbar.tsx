
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllCategories } from '../data/articles';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = getAllCategories();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                TechNexus
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-1">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="p-2">
              <SearchBar />
            </div>
            <div className="p-2 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={category === 'All' ? '/' : `/?category=${category}`}
                  className="px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
