import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../pages/BlogList';

export default function BlogSection() {
  const recentPosts = blogPosts.slice(0, 3); // showing top 3

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-blue to-card-blue/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-neon-cyan" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-indigo">
              Latest Articles
            </h2>
          </div>
          <p className="text-xl text-gray-400">Thoughts on development, data viz, and AI.</p>
        </motion.div>

        {recentPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block h-full group bg-card-blue/30 border border-indigo-500/20 rounded-2xl p-6 hover:bg-card-blue/50 hover:border-neon-cyan/50 hover:shadow-3d-cyan transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="text-neon-cyan font-medium flex items-center group-hover:translate-x-2 transition-transform">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-card-blue/10 rounded-2xl border border-indigo-500/20 max-w-2xl mx-auto"
          >
            <BookOpen className="w-12 h-12 text-indigo-500/50 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">My First Post is Cooking...</h3>
            <p className="text-gray-500 px-6">
              I'll be sharing articles here soon containing code snippets, interactive 3D visualizations, and in-depth tutorials.
            </p>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 rounded-full bg-indigo-500/10 text-neon-indigo border border-indigo-500/30 font-medium hover:bg-indigo-500/20 hover:shadow-3d-indigo transition-all duration-300 group"
          >
            View All Posts
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
