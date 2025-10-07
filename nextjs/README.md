# Ivandt Importer - Next.js Example

This is a [Next.js](https://nextjs.org) example showcasing the [Ivandt Importer SDK](https://ivandt.com/docs).

## Setup

### 1. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_IVANDT_PUBLIC_KEY=your_public_key
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
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [https://localhost.ivandt.com:3000](https://localhost.ivandt.com:3000) in your browser.

## Theme Customization

This example includes a theme toggle button (top center) to demonstrate how easily you can customize Ivandt's appearance. The theme variables are defined in `src/app/page.module.css` for both light and dark modes. This is purely for demonstration purposes and not required to use the Ivandt SDK.

## Project Structure

- `src/app/page.tsx` - Main importer page with schema configuration
- `src/app/api/sessions/route.ts` - API endpoint for creating Ivandt sessions
- `src/app/success/page.tsx` - Success page after import completion
- `src/app/page.module.css` - Custom theme variables for Ivandt importer
- `src/app/components/ThemeToggle.tsx` - Theme switcher (demo only)

## Learn More

[Learn about Ivandt features and API](https://ivandt.com/docs)
