
import React from 'react';
import { Article } from '../types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from './ui/badge';
import { useTheme } from '../context/ThemeContext';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  article: Article;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ article }) => {
  const formattedDate = formatDistanceToNow(new Date(article.timestamp), { addSuffix: true });
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden rounded-xl mb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'})` }}
        />
        {/* Semi-transparent overlay with enhanced blur effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
        
        {/* Additional gradient overlay for better contrast */}
        <div 
          className={cn(
            "absolute inset-0",
            theme === 'light' 
              ? 'bg-gradient-to-t from-background/95 via-background/70 to-background/30' 
              : 'bg-gradient-to-t from-background/95 via-background/60 to-background/20'
          )} 
        />
      </div>

      {/* Content with text shadows for better readability */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className={cn(
              "backdrop-blur-sm", 
              theme === 'light' 
                ? 'bg-background/90 text-gray-900 shadow-sm' 
                : 'bg-background/70'
            )}>
              {article.category}
            </Badge>
            <span className={cn(
              "text-sm font-medium", 
              theme === 'light' 
                ? 'text-gray-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]' 
                : 'text-muted-foreground'
            )}>
              {formattedDate} • {article.source}
            </span>
          </div>
          
          {/* Title with text shadow for enhanced readability */}
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
            theme === 'light' 
              ? 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]' 
              : 'text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
          )}>
            {article.title}
          </h1>
          
          {/* Summary with text shadow for enhanced contrast */}
          <p className={cn(
            "text-lg mb-8 line-clamp-3 md:line-clamp-4",
            theme === 'light' 
              ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' 
              : 'text-muted-foreground'
          )}>
            {article.summary}
          </p>
          
          {/* Buttons with enhanced contrast background */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to={article.url}>
                Read Article 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className={theme === 'light' ? 'bg-background/90 text-foreground border-white/20' : ''}>
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                Original Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
