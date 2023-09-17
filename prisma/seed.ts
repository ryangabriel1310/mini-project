import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const loremText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus, soluta odit laboriosam aperiam sapiente inventore, odio, aut sit qui quam repudiandae magnam quidem assumenda amet. At modi consectetur ratione!';

async function main() {
  await prisma.product.createMany({
    data: [
      {
        category: 'speaker',
        subCategory: 'JBL',
        title: 'JBL Type A',
        description: loremText,
        stock: 10,
        priceF: 100000,
      },
      {
        category: 'speaker',
        subCategory: 'JBL',
        title: 'JBL Type B',
        description: loremText,
        stock: 3,
        priceF: 100000,
      },
      {
        category: 'speaker',
        subCategory: 'JBL',
        title: 'JBL Type C',
        description: loremText,
        stock: 5,
        priceF: 100000,
      },
      {
        category: 'speaker',
        subCategory: 'Sony',
        title: 'Sony Type A',
        description: loremText,
        stock: 10,
        priceF: 100000,
      },
      {
        category: 'speaker',
        subCategory: 'Sony',
        title: 'Sony Type B',
        description: loremText,
        stock: 15,
        priceF: 100000,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
