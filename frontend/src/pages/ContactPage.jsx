import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { mockData } from '../mock';

const ContactPage = () => {
  const { company } = mockData;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const formatAddress = () => {
    const addr = company.address;
    return (
      <>
        {addr.building}, {addr.street},<br />
        {addr.area}, {addr.city},<br />
        {addr.state} {addr.zip}, {addr.country}
      </>
    );
  };

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
    <div className="min-h-screen pt-16" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white" data-testid="contact-title">
              Get In Touch
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Ready to transform your space? Contact us for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-300 bg-white dark:bg-black">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-lg text-black dark:text-white">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${company.email}`} className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors break-all" data-testid="contact-email">
                    {company.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-300 bg-white dark:bg-black">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-lg text-black dark:text-white">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${company.phone}`} className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" data-testid="contact-phone">
                    {company.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-300 bg-white dark:bg-black">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-lg text-black dark:text-white">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/70 dark:text-white/70">{formatAddress()}</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-black/10 dark:border-white/10 bg-white dark:bg-black">
                <CardHeader>
                  <CardTitle className="text-2xl text-black dark:text-white">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white"
                        data-testid="contact-name-input"
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
                        className="h-12 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white"
                        data-testid="contact-email-input"
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
                        className="h-12 border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white"
                        data-testid="contact-phone-input"
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
                        className="border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white"
                        data-testid="contact-message-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 h-12 text-lg font-semibold rounded-lg"
                      data-testid="contact-submit-button"
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
