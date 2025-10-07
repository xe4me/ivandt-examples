# Ivandt Importer - Nuxt Example

This is a [Nuxt](https://nuxt.com) example showcasing the [Ivandt Importer SDK](https://ivandt.com/docs).

## Setup

### 1. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
NUXT_PUBLIC_IVANDT_PUBLIC_KEY=your_public_key
IVANDT_SECRET_KEY=your_secret_key
```

You can obtain these keys from your [Ivandt environment settings](https://ivandt.com/docs/environments).

### 2. Add Origin to Ivandt Environment

Add `https://localhost.myapp.com:3000` as an allowed origin in your [Ivandt environment configuration](https://ivandt.com/docs/environments).

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

Open [https://localhost.myapp.com:3000](https://localhost.myapp.com:3000) in your browser.

## Theme Customization

This example includes a theme toggle button (top center) to demonstrate how easily you can customize Ivandt's appearance. The theme variables are defined in `pages/index.vue` for both light and dark modes. This is purely for demonstration purposes and not required to use the Ivandt SDK.

## Project Structure

- `pages/index.vue` - Main importer page with schema configuration
- `server/api/sessions.post.ts` - API endpoint for creating Ivandt sessions
- `pages/success.vue` - Success page after import completion
- `components/ThemeToggle.vue` - Theme switcher (demo only)
- `app/app.vue` - Root layout with global styles

## Learn More

[Learn about Ivandt features and API](https://ivandt.com/docs)
