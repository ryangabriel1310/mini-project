import { useState, type ChangeEvent } from 'react';

import { useForm } from 'react-hook-form';
import { type Product } from '@prisma/client';

import Button from '../button/Button';

import styles from './orderMenu.module.css';

export interface OrderMenuProps {
  cancelText?: string;
  confirmText?: string;
  handleCancel?: () => void;
  handleConfirm?: () => void;
  product?: Product;
}

interface IFormInput {
  quantity: number;
}

export default function OrderMenu({
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  handleCancel,
  handleConfirm,
  product,
}: OrderMenuProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  if (!product) {
    return <p>No product selected</p>;
  }

  const minQuantity = 1;
  const maxQuantity = product.stock;

  function decrease() {
    setQuantity((prevState) => prevState - 1);
  }

  function increase() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(event.target.value));
  }

  return (
    <form className={styles.container} noValidate>
      <label htmlFor="quantity">Select quantity</label>
      <p>Available stock: {product.stock}</p>
      <div className={styles.countContainer}>
        <button type="button" disabled={quantity <= minQuantity ? true : false} onClick={decrease}>
          -
        </button>
        <input
          className={styles.input}
          id="quantity"
          type="number"
          min={minQuantity}
          max={maxQuantity}
          value={quantity}
          onChange={handleChange}
        />
        <button type="button" disabled={quantity >= maxQuantity ? true : false} onClick={increase}>
          +
        </button>
      </div>
      <div className={styles.confirm}>
        <Button type="submit" onClick={handleConfirm}>
          {confirmText}
        </Button>
      </div>
      <Button type="button" onClick={handleCancel}>
        {cancelText}
      </Button>
    </form>
  );
}
