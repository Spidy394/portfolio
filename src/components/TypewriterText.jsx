import React, { useState, useEffect, useMemo } from 'react';

const TypewriterText = ({ text, delay = 100, className = "", startAnimation = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = useMemo(() => text, [text]);

  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [fullText, startAnimation]);

  useEffect(() => {
    if (startAnimation && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, fullText, startAnimation]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink-1 ml-1 text-white"> |</span>
    </span>
  );
};

export default TypewriterText;