# Portfolio - Fernando Bouchet

This is the source code for my personal portfolio website, showcasing my skills and projects as a Full Stack Developer.

Built with Next.js, Tailwind CSS, and TypeScript.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/porfolio.git
    cd porfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## Usage

### Running the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized production build in the `out` directory (since `output: "export"` is set in `next.config.ts`).

## Technologies Used

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS
*   **Language:** TypeScript
*   **Linting:** ESLint
*   **Animations:** Motion One
*   **UI Components:** next-themes, react-icons
*   **Deployment:** Configured for static export (likely deployed on a static hosting provider like GitHub Pages, Vercel, or Netlify).

## Project Structure

*   `app/`: Contains the core application logic, pages, and layouts (using Next.js App Router).
*   `components/`: Reusable React components.
*   `context/`: React context providers (e.g., `LanguageContext`).
*   `public/`: Static assets like images and favicons.
*   `locales/`: JSON files for internationalization (i18n).
*   `utils/`: Utility functions and data.
*   `next.config.ts`: Next.js configuration file.
*   `package.json`: Project metadata, dependencies, and scripts.
*   `tsconfig.json`: TypeScript configuration.

## Contributing

This is a personal portfolio, so direct contributions are generally not expected. However, if you find any issues or have suggestions, feel free to open an issue.

## Learn More (About Next.js)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
