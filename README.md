This is a [Next.js](https://nextjs.org/) project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

Create `.env` file on your local with following settings
```
API=http://localhost:3001
HOST_API=https://jobs.github.com
```
Now run project by using following commands
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3001/api/jobs](http://localhost:3001/api/jobs). This endpoint can be edited in `pages/api/jobs.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

This project is deployed using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) you can [check it here](https://vercel.com/gsin11/github-jobs)

Check out our [this project](https://vercel.com/gsin11/github-jobs) for more details.
