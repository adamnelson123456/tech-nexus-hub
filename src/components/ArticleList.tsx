
import React from 'react';
import { ArticleCard } from './ArticleCard';
import { Article } from '../types';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-muted animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">No articles found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
