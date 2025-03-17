
import React from 'react';
import { Article } from '../types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from './ui/badge';

interface HeroSectionProps {
  article: Article;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ article }) => {
  const formattedDate = formatDistanceToNow(new Date(article.timestamp), { addSuffix: true });

  return (
    <div className="relative overflow-hidden rounded-xl mb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/30 dark:from-background/95 dark:via-background/80 dark:to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="bg-background/50 dark:bg-background/30 backdrop-blur-sm">
              {article.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {formattedDate} • {article.source}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {article.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 line-clamp-3 md:line-clamp-4">
            {article.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to={article.url}>
                Read Article 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
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
