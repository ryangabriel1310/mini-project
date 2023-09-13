import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const itemsRouter = createTRPCRouter({
  getItems: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany();
  }),
});
