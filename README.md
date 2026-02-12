# 3-Step Survey Carousel

A beautiful, animated 3-step carousel component for websites. Perfect for product showcases, surveys, or step-by-step presentations.

## Features

- ✨ Smooth CSS transitions and animations
- - 🎨 Modern dark theme with cyan accents
  - - 📱 Fully responsive design
    - - ⚡ Lightweight (no dependencies)
      - - 🔄 Auto-advance with pause on hover
        - - 🎯 Step indicators and progress counter
          - - 🎭 Glass morphism effects with backdrop blur
           
            - ## Usage
           
            - ### HTML Structure
           
            - Copy the complete carousel HTML structure from `index.html` into your website.
           
            - ### CSS
           
            - Include the styles from `styles.css` in your page:
           
            - ```html
              <link rel="stylesheet" href="styles.css">
              ```

              Or use Tailwind CSS if you prefer the Tailwind version.

              ### JavaScript

              Include the carousel script at the end of your HTML:

              ```html
              <script src="script.js"></script>
              ```

              The carousel will automatically initialize on page load.

              ## Files

              - `index.html` - Complete HTML structure with all 3 steps
              - - `styles.css` - All styling (vanilla CSS with Tailwind classes)
                - - `script.js` - Carousel JavaScript logic and state management
                  - - `README.md` - This file
                   
                    - ## Customization
                   
                    - ### Auto-advance Duration
                   
                    - Change the `autoplayDuration` in `script.js`:
                   
                    - ```javascript
                      new SurveyCarousel({ autoplayDuration: 5000 }); // 5 seconds
                      ```

                      ### Colors

                      Modify the Tailwind classes or CSS variables to match your brand:
                      - Primary color: `cyan-400` (change to your color)
                      - - Background: `#0A0A0A` (dark gray/black)
                        - - Border: `white/10` (subtle white border)
                         
                          - ### Content
                         
                          - Update the text, buttons, and code blocks in `index.html` with your own content.
                         
                          - ## Browser Support
                         
                          - Works on all modern browsers:
                          - - Chrome/Edge (latest)
                            - - Firefox (latest)
                              - - Safari (latest)
                               
                                - ## License
                               
                                - Free to use on your website. No attribution required.
