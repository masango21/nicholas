# Portfolio

A personal portfolio website scaffolded with Next.js and TypeScript.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run Next.js linting

## Contact form

The contact form sends submissions to `masangonicholas20@gmail.com` through Gmail SMTP.
Copy `.env.example` to `.env.local`, then set `SMTP_PASS` to a Google app password for
`masangonicholas20@gmail.com`. Add the same variables in the Vercel project settings
before deploying. `CONTACT_TO_EMAIL` is optional and defaults to the same address.
