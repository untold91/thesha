import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { mockData } from '../mock';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = ['all', ...new Set(mockData.products.map(p => p.category))];

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    let products = activeCategory === 'all' 
      ? mockData.products 
      : mockData.products.filter(p => p.category === activeCategory);
    
    if (searchQuery.trim()) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return products;
  }, [activeCategory, searchQuery]);

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen pt-16" data-testid="products-page">
      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white" data-testid="products-title">
              PRODUCTS
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Premium smart home devices designed for seamless automation
            </p>
          </div>
        </div>
      </section>

      {/* Search and Category Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 dark:text-white/40" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white"
                data-testid="products-search-input"
              />
            </div>

            {/* Category Tabs - Fixed: No scrolling, proper wrapping */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`capitalize text-sm font-medium px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-transparent text-black dark:text-white border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10'
                  }`}
                  data-testid={`category-tab-${category}`}
                >
                  {category === 'all' ? 'All Products' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={handleProductClick}
                  className="group block"
                  data-testid={`product-card-${product.id}`}
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white dark:bg-black">
                    {/* Product Image */}
                    <div className="relative h-80 bg-black/5 dark:bg-white/5 flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`text-8xl text-black/20 dark:text-white/20 group-hover:scale-110 transition-transform duration-300 ${product.image ? 'hidden' : 'flex'} items-center justify-center absolute inset-0`}>
                        {product.name.charAt(0)}
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-center p-6">
                        <p className="text-white dark:text-black text-sm mb-4">
                          {product.description}
                        </p>
                        <div className="space-y-2">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black"></div>
                              <span className="text-white dark:text-black text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-white/80 dark:text-black/80 text-sm font-medium">
                          Click to view details →
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Name */}
                    <div className="p-6 bg-white dark:bg-black">
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:underline transition-all">
                        {product.name}
                      </h3>
                      <p className="text-sm text-black/50 dark:text-white/50 mt-1">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-black/70 dark:text-white/70">
                No products found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
