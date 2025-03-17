
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
        {/* Enhanced gradient with blur effect for better text readability */}
        <div 
          className={cn(
            "absolute inset-0 backdrop-blur-sm",
            theme === 'light' 
              ? 'bg-gradient-to-t from-background/95 via-background/90 to-background/75' 
              : 'bg-gradient-to-t from-background/95 via-background/80 to-background/40'
          )} 
        />
      </div>

      {/* Content with enhanced contrast for light mode */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className={cn(
              "backdrop-blur-sm", 
              theme === 'light' 
                ? 'bg-background/90 text-gray-900' 
                : 'bg-background/70'
            )}>
              {article.category}
            </Badge>
            <span className={cn(
              "text-sm font-medium", 
              theme === 'light' 
                ? 'text-gray-900' 
                : 'text-muted-foreground'
            )}>
              {formattedDate} • {article.source}
            </span>
          </div>
          
          {/* Title with enhanced readability */}
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
            theme === 'light' 
              ? 'text-gray-900 drop-shadow-sm' 
              : 'text-foreground'
          )}>
            {article.title}
          </h1>
          
          {/* Summary with enhanced contrast */}
          <p className={cn(
            "text-lg mb-8 line-clamp-3 md:line-clamp-4",
            theme === 'light' 
              ? 'text-gray-900' 
              : 'text-muted-foreground'
          )}>
            {article.summary}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to={article.url}>
                Read Article 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className={theme === 'light' ? 'bg-background/90' : ''}>
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
