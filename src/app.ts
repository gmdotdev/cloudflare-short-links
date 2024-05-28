import { Hono } from 'hono';

const app = new Hono();

const DOMAIN = 'https://gm.dev';

app.get('*', async (c) => {
  const statusCode = 301;

  const url = new URL(c.req.url);
  const { search } = url;

  return Response.redirect(`${DOMAIN}${search}`, statusCode);
});

// app.get('/:slug', async (c) => {
//   const statusCode = 301;

//   const slug = c.req.param('slug');
//   const url = new URL(c.req.url);
//   const { search } = url;

//   return Response.redirect(`${DOMAIN}/${slug}${search}`, statusCode);
// });

export default app;
