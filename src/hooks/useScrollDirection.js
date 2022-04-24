import {useState, useRef, useLayoutEffect} from 'react';

export default function useScrollDirection(
  _elementRef, scrollDownHandler, scrollUpHandler) {

  const [elementRef] = useState(_elementRef);
  const touchStartY = useRef();
  const listening = useRef(true);

  useLayoutEffect(() => {
    const element = elementRef.current;
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchend', handleTouchEnd, false);
    element.addEventListener('wheel', handleWheel, false);
    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('wheel', handleWheel);
    };
  }, []);

  function pauseListening() {
    listening.current = false;
    setTimeout(() => {
      listening.current = true;
    }, 1200);
  }

  function handleWheel(event) {
    if (event.cancelable) {
      event.preventDefault();
    }

    if (!listening.current) {
      return;
    }

    pauseListening();
    if (event.deltaY > 0) {
      scrollDownHandler();
    } else if (event.deltaY < 0) {
      scrollUpHandler();
    }
  }

  function handleTouchStart(event) {
    touchStartY.current = event.touches[0].clientY;
    if (event.cancelable) {
      event.preventDefault();
    }
  }

  function handleTouchEnd(event) {
    const touchEndY = event.changedTouches[0].clientY;

    if (event.cancelable) {
      event.preventDefault();
    }

    if (touchEndY < touchStartY.current) {
      scrollDownHandler();
    } else if (touchEndY > touchStartY.current) {
      scrollUpHandler();
    }
  }
}
