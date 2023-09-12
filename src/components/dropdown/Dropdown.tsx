export interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
}

export default function Dropdown({ options }: DropdownProps) {
  return (
    <>
      <label htmlFor="category">Categories</label>
      <select name="category" id="category">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
