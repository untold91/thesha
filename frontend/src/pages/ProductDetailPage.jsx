import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = mockData.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-background">
      {/* Back Button */}
      <div className="border-b border-gray-200 dark:border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-muted/30 dark:to-muted/10 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-border">
                <div className="text-9xl text-gray-400 dark:text-muted-foreground/50">
                  {product.name.charAt(0)}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-muted/30 dark:to-muted/10 rounded-lg flex items-center justify-center border-2 border-gray-200 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer transition-all">
                    <div className="text-2xl text-gray-400 dark:text-muted-foreground/50">
                      {product.name.charAt(0)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-foreground">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <Card className="border-2 border-gray-100 dark:border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-foreground">Key Features</h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="border-2 border-gray-100 dark:border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-foreground">Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-border">
                      <span className="text-gray-600 dark:text-muted-foreground">Category</span>
                      <span className="font-medium text-gray-900 dark:text-foreground">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-border">
                      <span className="text-gray-600 dark:text-muted-foreground">Warranty</span>
                      <span className="font-medium text-gray-900 dark:text-foreground">1 Year</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200 dark:border-border">
                      <span className="text-gray-600 dark:text-muted-foreground">Support</span>
                      <span className="font-medium text-gray-900 dark:text-foreground">24/7 Technical</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600 dark:text-muted-foreground">Installation</span>
                      <span className="font-medium text-gray-900 dark:text-foreground">Professional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-semibold">
                    Contact Us for Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;