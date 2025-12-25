import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mockData } from '../mock';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(mockData.products.map(p => p.category))];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? mockData.products 
    : mockData.products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white dark:from-muted/20 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-foreground">
              Shop Products
            </h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              Premium smart home devices designed for seamless automation
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-gray-200 dark:border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="h-14 bg-transparent border-0 gap-6 flex justify-start overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize text-sm font-medium px-4 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full transition-all"
                >
                  {category === 'all' ? 'All Products' : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden bg-white dark:bg-card"
              >
                {/* Product Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-muted/30 dark:to-muted/10 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-gray-400 dark:text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300">
                    {product.name.charAt(0)}
                  </div>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 group-hover:h-2 transition-all duration-300"></div>
                
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;