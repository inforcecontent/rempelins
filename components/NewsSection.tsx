import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl font-heading font-bold text-secondary mb-2">News & Insights</h2>
             <div className="w-16 h-1 bg-primary"></div>
          </div>
          <a href="/blog" className="hidden md:flex items-center text-primary font-bold uppercase text-sm hover:text-secondary transition-colors">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                 <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-gray-400 text-xs mb-3 font-medium uppercase">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <a href="#" className="text-primary font-bold text-sm uppercase hover:underline mt-auto">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="bg-white border border-gray-300 text-secondary px-6 py-3 rounded font-bold uppercase text-sm hover:bg-gray-50">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;