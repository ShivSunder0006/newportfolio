import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

export default function MermaidChart({ chart }) {
  const ref = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize inside useEffect to ensure it only runs on client
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      fontFamily: 'inherit',
      securityLevel: 'loose',
    });

    if (ref.current && chart) {
      const renderChart = async () => {
        try {
          // Generate a unique ID
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, chart);
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (err) {
          console.error("Mermaid parsing error:", err);
          setError("Failed to render flowchart.");
        }
      };
      renderChart();
    }
  }, [chart]);

  if (error) {
    return (
      <div className="my-8 bg-red-500/10 border border-red-500/20 p-4 rounded text-red-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className="mermaid-wrapper flex justify-center overflow-x-auto my-8 bg-card-blue/20 p-6 rounded-xl border border-indigo-500/20 shadow-3d-dark text-gray-300 min-h-[100px]"
    />
  );
}
