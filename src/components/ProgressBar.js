import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10); // Increase progress by 10% every second
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="loading">Loading...</div>
    </div>
  );
};

export default ProgressBar;
