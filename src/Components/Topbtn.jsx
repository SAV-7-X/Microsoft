import React, { useState, useEffect } from 'react';
// import './BackToTopButton.css'; // Import CSS file for animations

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState('bottom-4');

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Check if scrolled to the bottom of the page
      if (scrolled + windowHeight >= fullHeight) {
        setIsVisible(true);
        setHeight('top-60');
        console.log("Reached the bottom of the page!");
      } else if (scrolled === 0) {
        setIsVisible(false);
        setHeight('bottom-4');
      } else {
        setIsVisible(true);
        setHeight('bottom-4');
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
    <>
      <button
        className={`fixed ${height} font-semibold right-4 bg-gray-300 hover:bg-white text-black py-2 px-4 rounded z-20 flex ${
          isVisible ? 'fade-in' : 'fade-out'
        } ${height === 'top-60' && isVisible ? 'fade-ins' : ''}`}
        onClick={scrollToTop}
      >
        <span className="material-symbols-outlined">arrow_upward</span> Back to Top
      </button>
    </>
  );
};

export default BackToTopButton;
