import React from 'react';
import './ShimmerUI.css';

const ShimmerUI = ({ count = 12 }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-content">
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text shimmer-short"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;