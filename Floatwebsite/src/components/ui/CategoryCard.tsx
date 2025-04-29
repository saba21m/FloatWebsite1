import React from 'react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, url }) => {
  return (
    <a 
      href={url} 
      className="card p-6 flex flex-col items-center text-center group hover:border-blue-500 border-2 border-transparent"
    >
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </a>
  );
};

export default CategoryCard;