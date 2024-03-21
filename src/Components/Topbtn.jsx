import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-4 font-semibold right-4 bg-gray-300 hover:bg-white text-black py-2 px-4 rounded z-20 flex ${isVisible ? 'fade-in' : 'fade-out'}`}
      onClick={scrollToTop}
    >
      <span className="material-symbols-outlined">
        arrow_upward
      </span> Back to Top
    </button>
  );
};

export default BackToTopButton;
