
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Category } from '../types';
import { getAllCategories } from '../data/articles';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const CategoryFilter: React.FC = () => {
  const categories = getAllCategories();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (category: Category) => {
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/?category=${category}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Badge
          key={category}
          variant="outline"
          className={cn(
            "cursor-pointer px-3 py-1 rounded-full text-sm transition-all duration-200",
            category === currentCategory
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-secondary"
          )}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};
