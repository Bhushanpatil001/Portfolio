import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = '',
  triggerOnce = false,
  reverseOnExit = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (triggerOnce) {
            observer.unobserve(elementRef.current);
          }
        } else {
          if (reverseOnExit && hasAnimated && !triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce, reverseOnExit, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation} ${
        isVisible ? 'animate' : (hasAnimated && reverseOnExit ? 'reverse' : '')
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
