import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';
import Skeleton from '../components/Skeleton';

// Add your blog posts here later
export const blogPosts = [
  {
    slug: 'demystifying-architectures',
    title: 'Demystifying Complex Architectures: Building Interactive Visualizers for Foundation Models',
    date: '2026-03-31',
    readTime: '6 min read',
    excerpt: 'How to bridge the gap between academic ML research and accessible learning by building interactive visualizers.',
    tags: ['AI', 'Visualization', 'Streamlit', 'Transformers']
  }
];

const BlogListSkeleton = () => (
  <div className="bg-card-blue/30 border border-indigo-500/20 rounded-2xl p-6 h-full">
    <div className="flex items-center gap-4 mb-4">
      <Skeleton className="w-24 h-4" />
      <Skeleton className="w-20 h-4" />
    </div>
    <Skeleton className="h-8 w-3/4 mb-3" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-6" />
    <div className="flex gap-2 mb-6">
      <Skeleton className="w-16 h-6 rounded-full" />
      <Skeleton className="w-16 h-6 rounded-full" />
    </div>
    <Skeleton className="h-5 w-28" />
  </div>
);

function BlogList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-neon-cyan" />
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Detailed articles, tutorials, and thoughts on software engineering, 3D graphics, and data visualization.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array(6).fill(0).map((_, i) => <BlogListSkeleton key={i} />)
          ) : blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-neon-cyan bg-neon-cyan/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-neon-cyan font-medium group-hover:translate-x-2 transition-transform">
                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20 bg-card-blue/20 rounded-2xl border border-indigo-500/10 w-full"
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No articles yet</h3>
              <p className="text-gray-500">I'm currently working on some exciting content. Stay tuned!</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default BlogList;
