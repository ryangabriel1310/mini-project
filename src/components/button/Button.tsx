import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';

import styles from './button.module.css';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color?: string;
}

// export default function Button({ children, disabled, ref }: ButtonProps) {
//   return (
//     <button ref={ref} className={`${styles.button} ${disabled && styles.disabled}`}>
//       {children}
//     </button>
//   )
// }

const Button = forwardRef(function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { color, children, disabled } = props;
  return (
    <button ref={ref} className={`${styles.button} ${disabled && styles.disabled}`}>
      {children}
    </button>
  );
});

export default Button;
