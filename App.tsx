import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';

// Placeholder components for other routes to prevent 404s in demo
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-40 pb-20 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-heading font-bold text-secondary mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction for the redesign demo.</p>
    <a href="/" className="inline-block mt-8 text-primary hover:underline">Return Home</a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-text antialiased">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<PlaceholderPage title="Insurance Products" />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/claims" element={<PlaceholderPage title="Claims Centre" />} />
          <Route path="/blog" element={<PlaceholderPage title="News & Insights" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
        </Routes>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;