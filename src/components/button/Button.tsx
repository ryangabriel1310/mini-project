import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';

import styles from './button.module.css';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string;
}

export default function Button({ children, disabled, color, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${disabled && styles.disabled}`} style={{ backgroundColor: color }} {...props}>
      {children}
    </button>
  );
}
