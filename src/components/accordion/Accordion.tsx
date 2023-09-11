'use client';

import { CSSProperties, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './accordion.module.css';
import Button from '../button/Button';
import { IAccordionItem } from '@/interfaces';

export interface AccordionProps {
  items: IAccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [isOpenedArr, setIsOpenedArr] = useState<boolean[]>(items.map(() => false));
  const buttonRefArr = items.map(() => useRef<HTMLButtonElement>(null));

  function createHandleOpen(index: number) {
    return (event: MouseEvent) => {
      // If the event is inside the "Next" button, don't close the accordion
      const targetButton = event.target as HTMLButtonElement | null;
      if (buttonRefArr[index].current?.contains(targetButton)) {
        return;
      }

      setIsOpenedArr((prevState) => {
        const defaultArr = items.map(() => false);
        if (!prevState[index]) {
          defaultArr[index] = true;
        }
        return defaultArr;
      });
    };
  }

  function createCollapsibleStyle(index: number): CSSProperties {
    return {
      height: isOpenedArr[index] ? `${buttonRefArr[index].current?.scrollHeight}px` : 0,
      overflowY: 'hidden',
      transitionDuration: '0.5s',
    };
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <button onClick={createHandleOpen(index)} key={item.id}>
          <p>{item.title}</p>
          <div className={styles.image} />
          <div style={createCollapsibleStyle(index)}>
            <p className={styles.description}>{item.description}</p>
            <Button ref={buttonRefArr[index]}>Next</Button>
          </div>
        </button>
      ))}
    </div>
  );
}
