import styles from './dropdown.module.css';

export interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  return (
    <>
      <label htmlFor="category">Categories</label>
      <select name="category" id="category">
        {options.map((option) => (
          <option className={styles.option} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
