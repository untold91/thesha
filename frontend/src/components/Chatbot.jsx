import React, { useState } from 'react';
import { X, Send, MessageCircle, Minimize2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m your smart home assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const quickResponses = [
    { label: 'View Products', action: 'products' },
    { label: 'Smart Solutions', action: 'solutions' },
    { label: 'Contact Us', action: 'contact' },
    { label: 'Get a Quote', action: 'quote' }
  ];

  const handleQuickResponse = (action) => {
    const userMessage = quickResponses.find(r => r.action === action)?.label;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);

    setTimeout(() => {
      let botResponse = '';
      switch (action) {
        case 'products':
          botResponse = 'Great! Let me show you our products.';
          setTimeout(() => navigate('/products'), 1000);
          break;
        case 'solutions':
          botResponse = 'We offer smart solutions for Residences, Offices, and Hotels. What interests you?';
          break;
        case 'contact':
          botResponse = 'I\'ll take you to our contact page where you can reach us.';
          setTimeout(() => navigate('/contact'), 1000);
          break;
        case 'quote':
          botResponse = 'I\'d be happy to help! Please visit our contact page to request a detailed quote.';
          setTimeout(() => navigate('/contact'), 1500);
          break;
        default:
          botResponse = 'How else can I assist you?';
      }
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = '';

      if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        response = 'Our pricing depends on your specific needs. Please contact us for a personalized quote!';
      } else if (lowerInput.includes('product')) {
        response = 'We offer touch panels, lighting control, CCTV cameras, sensors, and more. Would you like to see our products page?';
      } else if (lowerInput.includes('service') || lowerInput.includes('support')) {
        response = 'We provide 1 year free service and 24/7 technical support. Need more details?';
      } else {
        response = 'I\'m here to help! You can ask about our products, services, or request a quote. Or choose from the quick options above.';
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
          data-testid="chatbot-open-button"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-2 border-black/20 dark:border-white/20 flex flex-col bg-white dark:bg-black" data-testid="chatbot-window">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-black/10 dark:border-white/10 bg-black dark:bg-white text-white dark:text-black rounded-t-lg">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Smart Home Assistant
            </CardTitle>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 dark:hover:bg-black/20 p-1 rounded transition-colors">
                <Minimize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 dark:hover:bg-black/20 p-1 rounded transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'bg-black/5 dark:bg-white/10 text-black dark:text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Responses */}
            {messages.length <= 2 && (
              <div className="grid grid-cols-2 gap-2 mt-4">
                {quickResponses.map((resp) => (
                  <button
                    key={resp.action}
                    onClick={() => handleQuickResponse(resp.action)}
                    className="text-sm px-3 py-2 border-2 border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    data-testid={`chatbot-quick-${resp.action}`}
                  >
                    {resp.label}
                  </button>
                ))}
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border-black/20 dark:border-white/20"
                data-testid="chatbot-input"
              />
              <Button onClick={handleSend} className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80" data-testid="chatbot-send-button">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
