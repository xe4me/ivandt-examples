# Ivandt Importer - Angular Example

This is an [Angular](https://angular.dev) example showcasing the [Ivandt Importer SDK](https://ivandt.com/docs).

## Setup

### 1. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
IVANDT_PUBLIC_KEY=your_public_key
IVANDT_SECRET_KEY=your_secret_key
```

You can obtain these keys from your [Ivandt environment settings](https://ivandt.com/docs/environments).

### 2. Add Origin to Ivandt Environment

Add `https://localhost.ivandt.com:3000` ( change to your own app) as an allowed origin in your [Ivandt environment configuration](https://ivandt.com/docs/environments).

### 3. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Running the App

Start the development server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

This will start both the Express API server (port 3001) and the Angular dev server (port 3000).

Open [https://localhost.ivandt.com:3000](https://localhost.ivandt.com:3000) in your browser .

## Theme Customization

This example includes a theme toggle button (top center) to demonstrate how easily you can customize Ivandt's appearance. The theme variables are defined in `src/styles.css` for both light and dark modes. This is purely for demonstration purposes and not required to use the Ivandt SDK.

## Project Structure

- `src/app/pages/home.component.ts` - Main importer page with schema configuration
- `server.mjs` - Express API server for creating Ivandt sessions
- `src/app/pages/success.component.ts` - Success page after import completion
- `src/app/components/theme-toggle.component.ts` - Theme switcher (demo only)
- `src/styles.css` - Global styles and Ivandt theme variables

## Learn More

[Learn about Ivandt features and API](https://ivandt.com/docs)
