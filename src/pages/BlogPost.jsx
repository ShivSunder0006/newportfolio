import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { MDXProvider } from '@mdx-js/react';
import { motion } from 'framer-motion';
import MermaidChart from '../components/MermaidChart';
import InteractiveHeatmap from '../components/InteractiveHeatmap';

// Pre-defined mapping or dynamic import for blog posts
const importPost = (slug) => lazy(() => import(`../content/blog/${slug}.mdx`).catch(() => {
  return { default: () => <div className="text-red-500">Post not found</div> };
}));

// Custom MDX components to style the markdown using Tailwind and our theme
const components = {
  h1: (props) => <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-indigo mb-6" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold text-white mt-12 mb-4 border-b border-indigo-500/20 pb-2" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold text-gray-200 mt-8 mb-3" {...props} />,
  p: (props) => <p className="text-lg text-gray-300 leading-relaxed mb-6" {...props} />,
  a: (props) => <a className="text-neon-cyan hover:text-neon-indigo underline decoration-indigo-500/30 transition-colors" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300" {...props} />,
  li: (props) => <li className="pl-2" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-neon-cyan bg-card-blue/20 p-4 rounded-r-lg italic text-gray-400 my-6" {...props} />
  ),
  pre: (props) => <pre className="bg-[#0d1117] border border-indigo-500/30 rounded-xl p-4 overflow-x-auto shadow-3d-dark my-8" {...props} />,
  code: (props) => {
    const isInline = !props.className;
    return isInline ? (
      <code className="bg-card-blue/50 text-neon-cyan px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    ) : (
      <code className="text-sm font-mono text-gray-300" {...props} />
    );
  },
  img: (props) => (
    <img className="rounded-xl shadow-3d-dark border border-indigo-500/20 max-w-full h-auto my-8 mx-auto" {...props} />
  ),
  MermaidChart,
  InteractiveHeatmap,
  // Allow rendering raw HTML tables
  table: (props) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
  th: (props) => <th className="border-b border-indigo-500/30 py-3 px-4 font-semibold text-white bg-card-blue/30" {...props} />,
  td: (props) => <td className="border-b border-indigo-500/10 py-3 px-4 text-gray-300" {...props} />,
};

export default function BlogPost() {
  const { slug } = useParams();
  
  if (!slug) return <div>Invalid post</div>;

  const PostContent = importPost(slug);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-gray-400 hover:text-neon-cyan transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        <Suspense fallback={
          <div className="flex items-center justify-center p-20 text-neon-cyan">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        }>
          <MDXProvider components={components}>
            <PostContent components={components} />
          </MDXProvider>
        </Suspense>
      </motion.article>
    </div>
  );
}
