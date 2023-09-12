import { useState } from 'react';
import styles from './accordion.module.css';
import type { IAccordionItem } from '~/interfaces';
import AccordionItem from './AccordionItem';

export interface AccordionProps {
  items: IAccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [isOpenedArr, setIsOpenedArr] = useState<boolean[]>(items.map(() => false));

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <AccordionItem key={item.id} index={index} item={item} isOpenedArr={isOpenedArr} setIsOpenedArr={setIsOpenedArr} />
      ))}
    </div>
  );
}
