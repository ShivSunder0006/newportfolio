import React, { useState } from 'react';
import { motion } from 'framer-motion';

const defaultWords = ["The", "animal", "didn't", "cross", "the", "street", "because", "it", "was", "too", "tired"];

const generateMockAttention = (words) => {
  const n = words.length;
  const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      let val = Math.random() * 0.3; 
      if (i === j) val += 0.5; 
      if (i === 7 && j === 1) val += 0.8; 
      if (i === 7 && j === 5) val += 0.2; 
      matrix[i][j] = val;
      sum += val;
    }
    for (let j = 0; j < n; j++) {
      matrix[i][j] /= sum;
    }
  }
  return matrix;
};

export default function InteractiveHeatmap() {
  const [words] = useState(defaultWords);
  const [attentionMatrix] = useState(() => generateMockAttention(defaultWords));
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  return (
    <div className="my-8 bg-card-blue/30 p-6 rounded-xl border border-indigo-500/20 shadow-3d-dark w-full overflow-hidden flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">Interactive Attention Map</h3>
      <p className="text-sm text-gray-400 mb-8 text-center italic">Hover over cells to view attention weights for "The animal didn't cross the street because it was too tired."</p>
      
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex flex-col min-w-max items-center">
          
          <div className="flex mb-2">
            <div className="w-16 h-8 mr-2"></div>
            {words.map((word, j) => (
              <div 
                key={`h-${j}`} 
                className={`w-10 flex items-end justify-center px-1 pb-1 transition-colors duration-200 cursor-default ${
                  hoveredCol === j ? 'text-neon-cyan font-bold' : 'text-gray-400'
                }`}
                style={{ height: '80px', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                <span className="text-xs">{word}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-1">
            {words.map((word, i) => (
              <div key={`row-${i}`} className="flex items-center">
                <div 
                  className={`w-16 pr-3 text-right text-xs truncate transition-colors duration-200 cursor-default ${
                    hoveredRow === i ? 'text-neon-cyan font-bold' : 'text-gray-400'
                  }`}
                >
                  {word}
                </div>
                
                <div className="flex space-x-1">
                  {words.map((_, j) => {
                    const weight = attentionMatrix[i][j];
                    const intensity = Math.min(1, weight * 2.5); // Boost visual intensity
                    
                    const isHovered = hoveredRow === i || hoveredCol === j;
                    const isExactHover = hoveredRow === i && hoveredCol === j;
                    
                    return (
                      <motion.div
                        key={`cell-${i}-${j}`}
                        className={`w-10 h-10 rounded cursor-crosshair flex items-center justify-center relative group
                          ${isExactHover ? 'ring-2 ring-neon-cyan z-10' : ''}
                          ${isHovered && !isExactHover ? 'ring-1 ring-indigo-500/30' : ''}
                        `}
                        style={{
                          backgroundColor: `rgba(99, 102, 241, ${intensity})`
                        }}
                        onMouseEnter={() => {
                          setHoveredRow(i);
                          setHoveredCol(j);
                        }}
                        onMouseLeave={() => {
                          setHoveredRow(null);
                          setHoveredCol(null);
                        }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute bottom-[110%] left-1/2 -translate-x-1/2 bg-[#0d1117]/95 border border-indigo-500/50 backdrop-blur pb-1 pt-1 px-2 rounded 
                                        text-[11px] text-white font-mono shadow-xl transition-opacity duration-150 pointer-events-none z-50 whitespace-nowrap">
                          {weight.toFixed(3)}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <div className="flex justify-between items-center w-full max-w-sm mt-8 border-t border-indigo-500/20 pt-4">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Low</span>
        <div className="flex-grow h-2 mx-4 rounded-full bg-gradient-to-r from-[rgba(99,102,241,0.1)] to-[rgba(99,102,241,1)]"></div>
        <span className="text-xs text-indigo-400 uppercase tracking-widest font-semibold">High</span>
      </div>
    </div>
  );
}
