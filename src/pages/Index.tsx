
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ArticleList } from '../components/ArticleList';
import { HeroSection } from '../components/HeroSection';
import { getArticlesByCategory, getRecentArticles, getFeaturedArticle } from '../data/articles';
import { Article, Category } from '../types';

const Index = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') as Category | null;

    // Get the featured article
    setFeaturedArticle(getFeaturedArticle());

    // Simulate API call with a small delay
    const timer = setTimeout(() => {
      if (category) {
        setArticles(getArticlesByCategory(category));
      } else {
        setArticles(getRecentArticles());
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {featuredArticle && <HeroSection article={featuredArticle} />}
        
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Latest Tech News</h1>
          <p className="text-muted-foreground max-w-3xl">
            Stay updated with the most recent developments, breakthroughs, and stories in technology
          </p>
        </header>
        
        <CategoryFilter />
        
        <ArticleList articles={articles.filter(article => article.id !== featuredArticle?.id)} isLoading={isLoading} />
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

export default Index;
