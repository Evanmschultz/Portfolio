# ϕ - Postulate - Next.js Portfolio Site for Evan Schultz

## Overview

Postulate is a interactive personal portfolio website built with Next.js, designed to showcase projects and provide contact information. The site features a 3D Lorenz attractor animation as its background, implemented using Three.js within a Next.js environment.

## Features

- Single page application using Next.js
- Responsive design
- 3D Lorenz attractor animation using Three.js
- Modal windows for displaying additional information without page reloads
- Smooth animations for text and UI elements
- Custom font integration (Neue Montreal)
- TypeScript support for improved code quality and developer experience

## Setup and Development

1. Clone the repository:
   ```
   git clone https://github.com/evanmschultz/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Edit `src/app/page.tsx` to update your name, title, and links.
- Modify the projects in the `ProjectsModal` component.
- Update your contact email in the `ContactModal` component.
- Styling can be adjusted in `src/app/globals.css`.
- The Lorenz attractor animation can be modified in the `LorenzCanvas` component.

## Deployment

This project is set up for easy deployment on Vercel. You can also deploy to other platforms that support Next.js applications.

## Vanilla JavaScript Version

If you prefer a vanilla JavaScript version of this portfolio, you can find it in the `vanilla-js` branch of this repository. To access it:

1. Switch to the vanilla-js branch:
   ```
   git checkout vanilla-js
   ```
2. Follow the setup instructions in the README of that branch.

The vanilla JS version provides a simpler setup without the need for a build process or JavaScript framework and is setup to run on GitHub Pages.

## Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Browser Compatibility

This site is designed to work on modern browsers that support ES6+ JavaScript and WebGL.

## License and Donations

This project is open source and available under the MIT License.

If you find this project useful and decide to use it as a template for your own portfolio, please consider the following:

- Provide attribution by keeping the credits section in your README.
- If you're able, consider making a small donation. While not required, it helps support the ongoing development and maintenance of this project.

To make a donation, you can visit my [GitHub Sponsors page](https://github.com/sponsors/evanmschultz).

Your support is greatly appreciated!

## Credits

- Lorenz attractor animation inspired by [Gary Ang](https://github.com/playgrdstar/lorenz_threejs)
- Neue Montreal font by [Pangram Pangram Foundry](https://pangrampangram.com/)

## Contact

For any queries or suggestions, please reach out to [evan@postulate.tech](mailto:evan@postulate.tech).