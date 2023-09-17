import { useRef, type CSSProperties, type SetStateAction } from 'react';

import { type Product } from '@prisma/client';

import Button from '../button/Button';

import styles from './accordion.module.css';

const BORDER_RADIUS = 30;

interface AccordionItemProps {
  handleClick?: () => void;
  index: number;
  product: Product;
  isOpenedArr: boolean[];
  setIsOpenedArr: (value: SetStateAction<boolean[]>) => void;
}

export default function AccordionItem({
  handleClick,
  index,
  product,
  isOpenedArr,
  setIsOpenedArr,
}: AccordionItemProps) {
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

  return (
    <div className={styles.card} style={{ borderRadius: BORDER_RADIUS }}>
      <button
        className={styles.clickable}
        style={createClickableStyle(isOpenedArr[index])}
        onClick={createHandleOpen(index)}
        key={product.id}
      >
        <p>{product.title}</p>
        <div className={styles.image} />
      </button>
      <div
        className={styles.collapsible}
        ref={collapsibleRef}
        style={createCollapsibleStyle(isOpenedArr[index], collapsibleRef.current?.scrollHeight)}
      >
        <p className={styles.description}>{product.description}</p>
        <Button onClick={handleClick}>Next</Button>
      </div>
    </div>
  );
}

function createClickableStyle(isOpened?: boolean): CSSProperties {
  if (isOpened) {
    return {
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
    };
  }
  return {
    borderRadius: BORDER_RADIUS,
  };
}

function createCollapsibleStyle(isOpened?: boolean, height?: number): CSSProperties {
  return {
    height: isOpened ? height : 0,
    marginBottom: isOpened ? 10 : 0,
  };
}
