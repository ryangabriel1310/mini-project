import { exampleRouter } from '~/server/api/routers/example';
import { productsRouter } from '~/server/api/routers/products';
import { createTRPCRouter } from '~/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  products: productsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
