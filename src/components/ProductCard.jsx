import React from 'react';
import { Tag } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Decor': 'bg-accent-soft text-secondary',
      'Gadget': 'bg-accent-tech text-secondary',
      'Lighting': 'bg-accent-warm text-secondary',
    };
    return colors[category] || 'bg-gray-200 text-secondary';
  };

  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
    >
      <div className="aspect-square bg-surface flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-tech/10" />
        <div className="text-6xl z-10">
          {product.category === 'Decor' && '🎨'}
          {product.category === 'Gadget' && '🎮'}
          {product.category === 'Lighting' && '💡'}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-secondary text-lg leading-tight flex-1">
            {product.name}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getCategoryColor(product.category)}`}>
            {product.category}
          </span>
        </div>

        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <Tag size={18} />
          <span>{product.price}</span>
        </div>

        <div className="mt-3 text-sm text-gray-500">
          {product.scripts.length} reply scripts
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

