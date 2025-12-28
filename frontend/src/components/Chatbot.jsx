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
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-2xl border-2 border-gray-200 dark:border-gray-700 flex flex-col bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Smart Home Assistant
            </CardTitle>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded transition-colors">
                <Minimize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
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
                    className="text-sm px-3 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                  >
                    {resp.label}
                  </button>
                ))}
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
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