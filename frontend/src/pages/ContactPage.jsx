import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { mockData } from '../mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success("Message Sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              Ready to transform your space? Contact us for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 bg-white dark:bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-foreground">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${mockData.company.email}`} className="text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors break-all">
                    {mockData.company.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 bg-white dark:bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-foreground">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${mockData.company.phone}`} className="text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    {mockData.company.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 bg-white dark:bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-foreground">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-muted-foreground">Serving across India</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-100 dark:border-border bg-white dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-foreground">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-200 dark:border-border focus:border-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-200 dark:border-border focus:border-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-200 dark:border-border focus:border-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-gray-200 dark:border-border focus:border-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold rounded-lg"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;