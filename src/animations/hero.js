// src/animations/hero.js
import { timeline } from './index.js';

// Hero section timeline animation
export function initHeroAnimations() {
  const heroBadge = document.querySelector('.hero-badge');
  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');
  const heroButtons = document.querySelectorAll('.hero-button');

  if (heroBadge || heroTitle || heroDescription || heroButtons.length > 0) {
    // Wait for page load and slight delay
    setTimeout(() => {
      const tl = timeline({
        easing: 'easeOutCubic',
        autoplay: true
      });

      // Badge animation
      if (heroBadge) {
        tl.add({
          targets: heroBadge,
          opacity: [0, 1],
          scale: [0.96, 1],
          duration: 420
        });
      }

      // Title animation
      if (heroTitle) {
        tl.add({
          targets: heroTitle,
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 680
        }, '-=200'); // Overlap with badge
      }

      // Description animation
      if (heroDescription) {
        tl.add({
          targets: heroDescription,
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 560
        }, '-=300');
      }

      // Buttons stagger animation
      if (heroButtons.length > 0) {
        tl.add({
          targets: heroButtons,
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 420,
          delay: (el, i) => i * 90
        }, '-=220');
      }
    }, 300);
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroAnimations);
} else {
  initHeroAnimations();
}