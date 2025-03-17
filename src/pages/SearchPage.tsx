
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ArticleList } from '../components/ArticleList';
import { searchArticles } from '../data/articles';
import { Article } from '../types';
import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with a small delay
    const timer = setTimeout(() => {
      if (query) {
        setArticles(searchArticles(query));
      } else {
        setArticles([]);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to homepage
        </Button>

        <header className="mb-10">
          <div className="flex items-center mb-4">
            <Search className="h-6 w-6 mr-2 text-muted-foreground" />
            <h1 className="text-3xl font-bold">
              Search Results: <span className="text-tech-blue dark:text-tech-purple">"{query}"</span>
            </h1>
          </div>
          {!isLoading && (
            <p className="text-muted-foreground">
              Found {articles.length} article{articles.length !== 1 ? 's' : ''}
            </p>
          )}
        </header>
        
        <ArticleList articles={articles} isLoading={isLoading} />
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

export default SearchPage;
