import React, { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Preload the scene
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  // Error fallback
  const ErrorFallback = () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
          <span className="text-black text-2xl">⚡</span>
        </div>
        <p className="text-gray-300">3D Scene Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-gray-200/10 pointer-events-none z-10"></div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-300/5 blur-3xl pointer-events-none z-10"></div>
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
          <LoadingSpinner />
        </div>
      )}

      {/* Main Spline Scene */}
      <Suspense fallback={<LoadingSpinner />}>
        <div 
          className={`w-full h-full transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 1 }}
        >
          {hasError ? (
            <ErrorFallback />
          ) : (
            <Spline
              scene="https://prod.spline.design/DOJv9GcTaWl-c37z/scene.splinecode"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}
            />
          )}
        </div>
      </Suspense>

      {/* Interactive overlay hints */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-60 pointer-events-none z-30">
        <div className="flex items-center space-x-1">
          {/* <span>🖱️</span>
          <span>Drag to interact</span> */}
        </div>
      </div>
    </div>
  );
};

export default SplineScene;
