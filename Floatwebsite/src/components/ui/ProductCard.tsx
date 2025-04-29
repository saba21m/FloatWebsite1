import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price?: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  price, 
  url 
}) => {
  return (
    <div className="card group">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          {price && <span className="text-blue-600 font-medium">{price}</span>}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <a 
          href={url} 
          className="inline-flex items-center text-blue-600 font-medium group"
        >
          Learn More 
          <ArrowRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;