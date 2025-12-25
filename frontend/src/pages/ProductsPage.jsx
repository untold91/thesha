import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              PRODUCTS
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Premium smart home devices designed for seamless automation
            </p>
          </div>
        </div>
      </section>

      {/* Search and Category Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
              <TabsList className="h-11 bg-transparent border-0 gap-4 flex justify-start overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="capitalize text-sm font-medium px-4 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all whitespace-nowrap"
                  >
                    {category === 'all' ? 'All Products' : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
                    {/* Product Image */}
                    <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                      <div className="text-8xl text-gray-400 dark:text-gray-500 group-hover:scale-110 transition-transform duration-300">
                        {product.name.charAt(0)}
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                        <p className="text-white text-sm mb-4">
                          {product.description}
                        </p>
                        <div className="space-y-2">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <span className="text-white text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-blue-400 text-sm font-medium">
                          Click to view details →
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Name */}
                    <div className="p-6 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
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