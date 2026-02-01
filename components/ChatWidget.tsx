import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
          <div className="bg-secondary p-4 flex justify-between items-center">
            <h4 className="text-white font-bold">Rempel Support</h4>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={18} />
            </button>
          </div>
          <div className="h-64 bg-gray-50 p-4 overflow-y-auto">
            <div className="bg-white p-3 rounded-br-lg rounded-tr-lg rounded-bl-lg shadow-sm max-w-[85%] mb-2">
              <p className="text-sm text-gray-700">Hi there! How can we help you with your insurance needs today?</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 flex">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 text-sm border-none focus:ring-0 outline-none"
            />
            <button className="text-primary hover:text-secondary">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Tooltip hint if closed */}
      {!isOpen && (
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-md whitespace-nowrap hidden md:block">
          <p className="text-sm font-bold text-secondary">How can I help?</p>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-white rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;