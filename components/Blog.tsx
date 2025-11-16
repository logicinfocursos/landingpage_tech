import React from 'react';
import { BLOG_POSTS } from '../constants';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id={SectionId.BLOG} className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Blog & Insights</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-neutral-400 transition-colors mt-4 md:mt-0 group">
            Ver todos os posts 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-video bg-neutral-900 border border-neutral-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale" 
                />
                <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 font-mono uppercase">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} de leitura</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:underline decoration-neutral-500 underline-offset-4">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
           <button className="inline-flex items-center gap-2 text-white hover:text-neutral-400 transition-colors">
            Ver todos os posts 
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
