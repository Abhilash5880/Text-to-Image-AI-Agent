## Text-to-Image AI Agent

This is a Text-to-Image AI Agent built using Next.js and Tailwind CSS. The project allows users to generate images from text prompts using an AI model and download the generated images.

## Tech Stack

- Frontend & Framework: Next.js (React framework)
- Styling: Tailwind CSS
- AI Model: [FLUX.1-schnell](https://huggingface.co/black-forest-labs/FLUX.1-schnell) (hosted on Hugging Face)
- Server-side API: Next.js server-side functions
- Deployment: Vercel
- Other Tools: NPM/Yarn, Git, ESLint

## Workflow

- User Input: User enters a text prompt in the input field.
- API Request: The frontend sends the prompt to the Hugging Face AI model via a Next.js server-side function.
- Image Generation: The AI model generates the image based on the input.
- Display Result: Generated images are displayed on the web interface.
- Download Feature: Users can download the generated images directly from the web app.

## Project Status

- The project is fully functional and working as expected.
- Users can generate and download high-quality AI images.
- Deployed successfully on Vercel.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
