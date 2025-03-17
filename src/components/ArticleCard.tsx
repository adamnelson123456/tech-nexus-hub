
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formattedDate = formatDistanceToNow(new Date(article.timestamp), { addSuffix: true });

  return (
    <Card className="overflow-hidden card-hover flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="mb-2">
            {article.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formattedDate}
          </span>
        </div>
        <Link to={article.url} className="hover:underline">
          <h3 className="text-xl font-bold line-clamp-2">{article.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3 mb-3">
          {article.summary}
        </p>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Source: {article.source}</span>
        <a 
          href={article.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-tech-blue dark:text-tech-purple hover:underline"
        >
          Original <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};
