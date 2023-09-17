import { useState } from 'react';

import { type Product } from '@prisma/client';

import AccordionItem from './AccordionItem';

import styles from './accordion.module.css';

export interface AccordionProps {
  createHandleClick?: (product?: Product) => () => void;
  products?: Product[];
}

export default function Accordion({ products = [], createHandleClick }: AccordionProps) {
  const [isOpenedArr, setIsOpenedArr] = useState<boolean[]>(products.map(() => false));

  return (
    <div className={styles.container}>
      {products.map((product, index) => {
        const handleClick = createHandleClick?.(product);
        return (
          <AccordionItem
            handleClick={handleClick}
            index={index}
            product={product}
            isOpenedArr={isOpenedArr}
            key={product.id}
            setIsOpenedArr={setIsOpenedArr}
          />
        );
      })}
    </div>
  );
}
