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
      <div className="min-h-screen pt-16 flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-black" data-testid="product-detail-page">
      {/* Back Button */}
      <div className="border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            data-testid="back-to-products-button"
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
              <div className="relative h-[500px] bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-black/10 dark:border-white/10">
                <div className="text-9xl text-black/20 dark:text-white/20">
                  {product.name.charAt(0)}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative h-24 bg-black/5 dark:bg-white/5 rounded-lg flex items-center justify-center border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white cursor-pointer transition-all">
                    <div className="text-2xl text-black/20 dark:text-white/20">
                      {product.name.charAt(0)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3 bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white" data-testid="product-detail-title">
                  {product.name}
                </h1>
                <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <Card className="border-2 border-black/10 dark:border-white/10 bg-white dark:bg-black">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Key Features</h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                        <span className="text-black/80 dark:text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="border-2 border-black/10 dark:border-white/10 bg-white dark:bg-black">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-black/10 dark:border-white/10">
                      <span className="text-black/60 dark:text-white/60">Category</span>
                      <span className="font-medium text-black dark:text-white">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-black/10 dark:border-white/10">
                      <span className="text-black/60 dark:text-white/60">Warranty</span>
                      <span className="font-medium text-black dark:text-white">1 Year</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-black/10 dark:border-white/10">
                      <span className="text-black/60 dark:text-white/60">Support</span>
                      <span className="font-medium text-black dark:text-white">24/7 Technical</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-black/60 dark:text-white/60">Installation</span>
                      <span className="font-medium text-black dark:text-white">Professional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 h-14 text-lg font-semibold" data-testid="contact-for-pricing-button">
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
