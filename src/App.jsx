import React, { useState, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import { products } from './data/products';
import { Package } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase();

    return products.filter(product => {
      // Search in product name
      if (product.name.toLowerCase().includes(query)) {
        return true;
      }

      // Search in category
      if (product.category.toLowerCase().includes(query)) {
        return true;
      }

      // Search in price
      if (product.price.toLowerCase().includes(query)) {
        return true;
      }

      // Search in script questions and answers
      return product.scripts.some(script =>
        script.question.toLowerCase().includes(query) ||
        script.answer.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-surface">
      <Toaster />

      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent-tech text-white py-6 md:py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Package size={32} className="md:w-10 md:h-10" />
            <h1 className="text-2xl md:text-4xl font-bold">Torongoo CSH</h1>
          </div>
          <p className="text-white/90 text-sm md:text-base">Customer Support Hub - Quick Reply Scripts</p>
        </div>
      </header>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Results Info */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-secondary/70 text-sm md:text-base">
              Found <span className="font-bold text-primary">{filteredProducts.length}</span> result(s) for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-24">
            <div className="text-6xl md:text-8xl mb-4">🔍</div>
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">No products found</h3>
            <p className="text-secondary/60">Try searching with different keywords</p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;

