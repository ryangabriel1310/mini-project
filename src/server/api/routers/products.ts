import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { z } from 'zod';

import { Category } from '@prisma/client';

export const productsRouter = createTRPCRouter({
  getSubCategoriesFromCategories: publicProcedure
    .input(
      z.object({
        category: z.nativeEnum(Category),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findMany({
        where: {
          category: input?.category,
        },
        distinct: ['subCategory'],
      });
    }),
  getProductsFromSubCategories: publicProcedure
    .input(
      z.object({
        subCategory: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findMany({
        where: {
          subCategory: input?.subCategory,
        },
      });
    }),
});
