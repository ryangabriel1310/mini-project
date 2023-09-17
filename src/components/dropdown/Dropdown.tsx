import { useState } from 'react';

import Select, { type CSSObjectWithLabel, type SingleValue } from 'react-select';
import { type Category } from '@prisma/client';

import { getTitleCaseFromCamelCase } from '~/utils';

interface Option {
  value: Category;
  label: string;
}

export interface DropdownProps {
  values: Category[];
  selectedValue: Category;
  setSelectedValue: (newValue: Category) => void;
}

export default function Dropdown({ values, selectedValue, setSelectedValue }: DropdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const selectedOption: Option = {
    value: selectedValue,
    label: getTitleCaseFromCamelCase(selectedValue),
  };
  const options: Option[] = values.map((value) => ({
    value,
    label: getTitleCaseFromCamelCase(value),
  }));

  function handleChange(newOption: SingleValue<Option>): void {
    if (!newOption) {
      return;
    }
    setSelectedValue(newOption.value);
  }

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  // Typescript format for methods in the styles object
  // exampleMethod(baseStyles: CSSObjectWithLabel, state: ExampleMethodProps<Option>) {
  //   return { ...baseStyles, minWidth: '250px', backgroundColor: 'white' };
  // },

  // For all the available methods, check: https://react-select.com/styles#inner-components
  const styles = {
    control(baseStyles: CSSObjectWithLabel) {
      return { ...baseStyles, minWidth: '250px', backgroundColor: 'white' };
    },
    dropdownIndicator(baseStyles: CSSObjectWithLabel) {
      return { ...baseStyles, transform: isMenuOpen ? 'rotate(-180deg)' : '', transition: 'transform 0.3s ease' };
    },
    menuList(baseStyles: CSSObjectWithLabel) {
      return { ...baseStyles, maxHeight: '200px' };
    },
    option(baseStyles: CSSObjectWithLabel) {
      return { ...baseStyles, marginBottom: '10px', color: 'black' };
    },
  };

  return (
    <Select
      value={selectedOption}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      options={options}
      onChange={handleChange}
      styles={styles}
    />
  );
}
