/**
 * 3-Step Survey Carousel Component
 * A lightweight carousel that automatically cycles through 3 steps
 */
class SurveyCarousel {
    constructor(options = {}) {
          this.currentStep = 0;
          this.totalSteps = 3;
          this.autoplayDuration = options.autoplayDuration || 8000; // 8 seconds
      this.transitionDuration = 700; // matches CSS duration
      this.autoplayInterval = null;

      this.stepLabels = [
              'The current reality',
              'Dual Web engine',
              'The AI-ready future'
            ];

      this.init();
    }

  init() {
        this.setupEventListeners();
        this.goToStep(0);
        this.startAutoplay();
  }

  setupEventListeners() {
        // Next buttons
      document.querySelectorAll('[data-next-button]').forEach(btn => {
              btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.nextStep();
                        this.restartAutoplay();
              });
      });

      // Pause autoplay on hover
      const carousel = document.querySelector('[data-carousel-item="0"]')?.parentElement;
        if (carousel) {
                carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
                carousel.addEventListener('mouseleave', () => this.startAutoplay());
        }

      // Optional: keyboard navigation
      document.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowRight') {
                        this.nextStep();
                        this.restartAutoplay();
              }
              if (e.key === 'ArrowLeft') {
                        this.prevStep();
                        this.restartAutoplay();
              }
      });
  }

  goToStep(step) {
        this.currentStep = Math.max(0, Math.min(step, this.totalSteps - 1));

      // Update carousel items
      document.querySelectorAll('[data-carousel-item]').forEach((item, index) => {
              const offset = (index - this.currentStep) * 100;
              item.style.transform = `translateX(${offset}%)`;
              item.style.opacity = index === this.currentStep ? '1' : '0';
              item.style.pointerEvents = index === this.currentStep ? 'auto' : 'none';
      });

      // Update indicators
      this.updateIndicators();

      // Update step counter
      this.updateStepCounter();
  }

  nextStep() {
        const nextStep = (this.currentStep + 1) % this.totalSteps;
        this.goToStep(nextStep);
  }

  prevStep() {
        const prevStep = (this.currentStep - 1 + this.totalSteps) % this.totalSteps;
        this.goToStep(prevStep);
  }

  updateIndicators() {
        document.querySelectorAll('[data-indicator]').forEach((indicator, index) => {
                if (index === this.currentStep) {
                          indicator.className = 'rounded bg-white/50 h-1 w-8 transition-all duration-300';
                } else {
                          indicator.className = 'rounded bg-white/20 h-1 w-8 transition-all duration-300';
                }
        });
  }

  updateStepCounter() {
        const counter = document.getElementById('step-counter');
        if (counter) {
                counter.textContent = `Step ${this.currentStep + 1} of ${this.totalSteps} — ${this.stepLabels[this.currentStep]}`;
        }
  }

  startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextStep(), this.autoplayDuration);
  }

  pauseAutoplay() {
        clearInterval(this.autoplayInterval);
  }

  restartAutoplay() {
        this.pauseAutoplay();
        this.startAutoplay();
  }

  // Public method to manually go to a specific step
  goTo(stepNumber) {
        this.goToStep(stepNumber - 1); // Convert to 0-based index
      this.restartAutoplay();
  }

  // Public method to pause/resume
  pause() {
        this.pauseAutoplay();
  }

  resume() {
        this.startAutoplay();
  }
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
          window.carousel = new SurveyCarousel({ autoplayDuration: 8000 });
    });
} else {
    window.carousel = new SurveyCarousel({ autoplayDuration: 8000 });
}

// Optional: Expose carousel globally for external control
// Usage: window.carousel.goTo(2) // Go to step 2
//        window.carousel.pause() // Pause autoplay
//        window.carousel.resume() // Resume autoplay
