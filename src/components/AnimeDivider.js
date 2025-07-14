import React from 'react';

const AnimeDivider = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      {/* Debug text */}
      <div className="text-white text-center mb-4">
        <p className="text-sm opacity-50">--- DIVIDER ---</p>
      </div>
      {/* Test divider that should be visible */}
      <div 
        className="divider-3d"
        style={{
          width: '80%',
          height: '6px',
          background: '#ff1744',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(255, 23, 68, 0.8)',
          animation: 'pulse 2s infinite',
          border: '2px solid #ff758c'
        }}
      ></div>
    </div>
  );
};

export default AnimeDivider;
