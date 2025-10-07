# Ivandt Importer - Framework Examples

This monorepo showcases how to integrate the [Ivandt Importer SDK](https://ivandt.com/docs) into different JavaScript frameworks.

## What is Ivandt?

Ivandt is a powerful data import solution that makes it easy to accept CSV and Excel files from your users. It provides an embeddable importer with intelligent column mapping, data validation, and transformation capabilities - all with a beautiful, customizable UI.

## Examples

This repository contains working examples for:

- **Next.js** - Full-stack React framework example
- **Nuxt** - Full-stack Vue framework example

Each example demonstrates:
- Creating secure import sessions via API endpoints
- Embedding the Ivandt importer component
- Configuring field schemas with validation rules
- Customizing the importer theme (light/dark mode)
- Handling successful imports

## Getting Started

Each example has its own README with detailed setup instructions. Navigate to the framework directory you're interested in:

- [Next.js Example](./nextjs/README.md)
- [Nuxt Example](./nuxt/README.md)

## Key Features Demonstrated

- **Session Management** - Secure server-side session creation using your Ivandt secret key
- **Schema Configuration** - Define fields with various types (text, numeric, monetary, checkbox, etc.)
- **Validation** - Built-in validators for emails, phone numbers, URLs, UUIDs, and more
- **Intelligent Import** - Automatic column mapping suggestions
- **Theme Customization** - Full control over colors and styling using CSS variables
- **HTTPS Support** - Both examples run with HTTPS enabled for local development

## Learn More

- [Ivandt Documentation](https://ivandt.com/docs)
- [API Reference](https://ivandt.com/docs/api)
- [Get Your API Keys](https://ivandt.com/docs/environments)

## License

Proprietary - See LICENSE file
