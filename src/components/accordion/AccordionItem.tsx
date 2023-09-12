import { useRef, type CSSProperties, type SetStateAction } from 'react';
import type { IAccordionItem } from '~/interfaces';

import styles from './accordion.module.css';
import Button from '../button/Button';

interface AccordionItemProps {
  index: number;
  item: IAccordionItem;
  isOpenedArr: boolean[];
  setIsOpenedArr: (value: SetStateAction<boolean[]>) => void;
}

export default function AccordionItem({ index, item, isOpenedArr, setIsOpenedArr }: AccordionItemProps) {
  const collapsibleRef = useRef<HTMLDivElement>(null);

  function createHandleOpen(index: number) {
    return () => {
      setIsOpenedArr((prevState) => {
        const defaultArr = prevState.map(() => false);
        if (!prevState[index]) {
          defaultArr[index] = true;
        }
        return defaultArr;
      });
    };
  }

  function createCollapsibleStyle(index: number): CSSProperties {
    return {
      height: isOpenedArr[index] ? `${collapsibleRef.current?.scrollHeight}px` : 0,
      overflowY: 'hidden',
      transitionDuration: '0.5s',
    };
  }

  return (
    <div className={styles.card}>
      <button className={styles.card} onClick={createHandleOpen(index)} key={item.id}>
        <p>{item.title}</p>
        <div className={styles.image} />
      </button>
      <div className={styles.collapsible} ref={collapsibleRef} style={createCollapsibleStyle(index)}>
        <p className={styles.description}>{item.description}</p>
        <Button>Next</Button>
      </div>
    </div>
  );
}
