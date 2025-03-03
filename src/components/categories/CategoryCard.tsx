
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  description,
  image,
  color,
  count,
}) => {
  return (
    <Link 
      to={`/categories/${id}`}
      className="group relative overflow-hidden rounded-xl shadow-sm hover-scale"
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-80 transition-all duration-500 group-hover:opacity-95",
        color
      )}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {count} suppliers
          </span>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
