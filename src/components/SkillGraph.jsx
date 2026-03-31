import { useEffect, useRef, useState, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const SkillGraph = () => {
  const containerRef = useRef(null);
  const fgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: 600
      });
    }
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: 600
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    nodes: [
      { id: 'AI/ML', group: 1, val: 24, color: '#38bdf8' },
      { id: 'TensorFlow', group: 1, val: 12, color: '#38bdf8' },
      { id: 'PyTorch', group: 1, val: 12, color: '#38bdf8' },
      { id: 'Transformers', group: 1, val: 12, color: '#38bdf8' },
      { id: 'LangChain', group: 1, val: 12, color: '#38bdf8' },
      { id: 'LangGraph', group: 1, val: 12, color: '#38bdf8' },
      { id: 'RAG', group: 1, val: 12, color: '#38bdf8' },
      { id: 'Computer Vision', group: 1, val: 12, color: '#38bdf8' },
      { id: 'NLP', group: 1, val: 12, color: '#38bdf8' },
      { id: 'GAN', group: 1, val: 12, color: '#38bdf8' },
      
      { id: 'Languages', group: 2, val: 24, color: '#818cf8' },
      { id: 'Python', group: 2, val: 12, color: '#818cf8' },
      { id: 'C++', group: 2, val: 12, color: '#818cf8' },
      { id: 'C', group: 2, val: 12, color: '#818cf8' },
      { id: 'SQL', group: 2, val: 12, color: '#818cf8' },
      
      { id: 'Tools', group: 3, val: 24, color: '#4edea3' },
      { id: 'Git', group: 3, val: 12, color: '#4edea3' },
      { id: 'GitHub', group: 3, val: 12, color: '#4edea3' },
      { id: 'ReactJs', group: 3, val: 12, color: '#4edea3' },
      { id: 'MLOps', group: 3, val: 12, color: '#4edea3' },
      { id: 'Gradio', group: 3, val: 12, color: '#4edea3' },
    ],
    links: [
      { source: 'AI/ML', target: 'TensorFlow' },
      { source: 'AI/ML', target: 'PyTorch' },
      { source: 'AI/ML', target: 'Transformers' },
      { source: 'AI/ML', target: 'LangChain' },
      { source: 'AI/ML', target: 'LangGraph' },
      { source: 'AI/ML', target: 'RAG' },
      { source: 'AI/ML', target: 'Computer Vision' },
      { source: 'AI/ML', target: 'NLP' },
      { source: 'AI/ML', target: 'GAN' },

      { source: 'Languages', target: 'Python' },
      { source: 'Languages', target: 'C++' },
      { source: 'Languages', target: 'C' },
      { source: 'Languages', target: 'SQL' },
      
      { source: 'Tools', target: 'Git' },
      { source: 'Tools', target: 'GitHub' },
      { source: 'Tools', target: 'ReactJs' },
      { source: 'Tools', target: 'MLOps' },
      { source: 'Tools', target: 'Gradio' },
      
      { source: 'Languages', target: 'Tools' },
      { source: 'AI/ML', target: 'Languages' },
    ]
  };

  const paintNode = useCallback((node, ctx, globalScale) => {
    const label = node.id;
    const fontSize = node.val / 2;
    ctx.font = `${fontSize}px Inter, sans-serif`;
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
    ctx.fillStyle = node.color + '10';
    ctx.fill();
    
    ctx.shadowColor = node.color;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = node.color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText(label, node.x, node.y);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-card-blue/50 rounded-2xl border border-slate-700/50 hover:border-neon-cyan/50 transition-colors shadow-3d-dark mt-8 overflow-hidden relative" style={{ cursor: 'grab' }}>
      <p className="absolute top-4 left-6 text-slate-400 text-sm z-10 select-none">Drag to interact. Scroll to zoom.</p>
      <ForceGraph2D
        ref={fgRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={data}
        nodeLabel="id"
        nodeCanvasObject={paintNode}
        linkColor={() => 'rgba(255,255,255,0.1)'}
        linkWidth={1}
        enableNodeDrag={true}
        d3VelocityDecay={0.4}
        onNodeClick={(node) => {
          fgRef.current.centerAt(node.x, node.y, 1000);
          fgRef.current.zoom(8, 2000);
        }}
        backgroundColor="transparent"
      />
    </div>
  );
};

export default SkillGraph;
