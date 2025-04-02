import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 100, className = "", startAnimation = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset the effect when text changes or startAnimation changes
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [text, startAnimation]);

  useEffect(() => {
    if (startAnimation && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, startAnimation]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink-1 ml-1 text-white"> |</span>
    </span>
  );
};

export default TypewriterText; 