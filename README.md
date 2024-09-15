# ϕ - Postulate - Portfolio site for Evan Schultz

## Overview

Postulate is a minimalist, interactive personal portfolio website designed to showcase projects and provide contact information. The site features a 3D Lorenz attractor animation as its background.

## Features

- Single page design with dynamic content loading
- Responsive design using vanilla HTML, CSS, and JS
- 3D Lorenz attractor animation using Three.js
- Modal windows for displaying additional information without reloading the animation
- Smooth animations for text and UI elements
- Custom font integration (Neue Montreal)

## Project Structure

```
portfolio/
│
├── index.html
├── README.md
├── CNAME
│
├── Assets/
│   ├── ...
│
├── Fonts/
│   ├── ...
│
└── static/
    ├── css/
    │   └── style.css
    │
    └── js/
        ├── animation.js
        └── script.js
```

## Setup and Customization

1. Clone the repository:
   ```
   git clone https://github.com/evanmnschultz/portfolio.git
   cd portfolio
   ```

2. Customize the content:
   - Edit `index.html` to update your name, title, and links.
   - Modify the projects in the projects modal.
   - Update your contact email in the contact modal.

3. Customize the styling:
   - Edit `static/css/style.css` to change colors, fonts, or layout.

4. Modify the animation:
   - The Lorenz attractor animation can be adjusted in `static/js/animation.js`.

5. Update assets:
   - Replace images in the `Assets/` directory with your own.

6. Deploy:
   - The site is ready to be deployed to any static site hosting service (e.g., GitHub Pages, Netlify, Vercel).

## Dependencies

- [Three.js](https://threejs.org/) (r128) - For 3D animation

## Browser Compatibility

This site is designed to work on modern browsers that support ES6+ JavaScript and WebGL.

## License and Donations
This project is open source and available under the MIT License.
If you find this project useful and decide to use it as a template for your own portfolio, please consider the following:

Provide attribution by keeping the credits section in your README.
If you're able, consider making a small donation. While not required, it helps support the ongoing development and maintenance of this project.

To make a donation, you can visit my GitHub Sponsors page.
Your support is greatly appreciated!

## Credits

- Lorenz attractor animation inspired by [Gary Ang](https://github.com/playgrdstar/lorenz_threejs)
- Neue Montreal font by [Pangram Pangram Foundry](https://pangrampangram.com/)

## Contact

For any queries or suggestions, please reach out to [evan@postulate.tech](mailto:evan@postulate.tech).
