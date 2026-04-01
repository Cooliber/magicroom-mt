// src/animations/hover.js
import { createAnimation } from './index.js';

// Spring hover effects
export function initHoverAnimations() {
  const springHoverElements = document.querySelectorAll('.spring-hover');

  springHoverElements.forEach(element => {
    let animation;

    element.addEventListener('mouseenter', () => {
      if (animation) animation.pause();
      animation = createAnimation(element, {
        translateY: [0, -4],
        scale: [1, 1.01],
        duration: 280,
        easing: 'cubicBezier(0.22, 1, 0.36, 1)'
      });
    });

    element.addEventListener('mouseleave', () => {
      if (animation) animation.pause();
      animation = createAnimation(element, {
        translateY: [-4, 0],
        scale: [1.01, 1],
        duration: 240,
        easing: 'cubicBezier(0.22, 1, 0.36, 1)'
      });
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHoverAnimations);
} else {
  initHoverAnimations();
}