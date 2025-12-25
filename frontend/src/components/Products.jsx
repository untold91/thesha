import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-foreground">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground">
            Premium quality smart home devices designed for seamless automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden bg-white dark:bg-card"
            >
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
  );
};

export default Products;