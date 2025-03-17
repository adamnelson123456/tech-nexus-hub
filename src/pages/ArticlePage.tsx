
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { getArticleById } from '../data/articles';
import { Article } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, ArrowLeft, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      if (id) {
        const foundArticle = getArticleById(id);
        setArticle(foundArticle || null);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4 max-w-3xl mx-auto">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to homepage
          </Button>
        </div>
      </div>
    );
  }

  const formattedDate = formatDistanceToNow(new Date(article.timestamp), { addSuffix: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge>{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {formattedDate}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center justify-between text-sm">
              <p className="text-muted-foreground">Source: {article.source}</p>
              <a 
                href={article.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-tech-blue dark:text-tech-purple hover:underline"
              >
                Read original article <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </header>

          {article.imageUrl && (
            <div className="mb-8">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none">
            {article.fullContent?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} TechNexus • All news content belongs to their respective sources
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
