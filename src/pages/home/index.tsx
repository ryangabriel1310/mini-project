import type { SyntheticEvent } from 'react';
import { Dropdown, Accordion } from '~/components';
import type { IAccordionItem } from '~/interfaces';

import styles from './home.module.css';
import { api } from '~/utils/api';

export default function Home() {
  const { data } = api.example.getItems.useQuery();

  function handleSelect(e: SyntheticEvent<HTMLSelectElement, Event>) {
    return null;
  }

  return (
    <main className={styles.main}>
      <h2>Welcome to the store!</h2>
      <Dropdown options={options} onSelect={handleSelect} />
      <Accordion items={defaultItems} />
    </main>
  );
}

const options = ['Speaker', 'Electric Fan', 'Blender', 'Flashlight'];
const defaultItems: IAccordionItem[] = [
  {
    id: '1',
    title: 'Speaker A',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores praesentium similique nemo obcaecati voluptate sit saepe, eaque veniam ut dicta voluptatum minima maxime vel. Distinctio amet possimus molestiae soluta.',
  },
  {
    id: '2',
    title: 'Speaker B',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores praesentium similique nemo obcaecati voluptate sit saepe, eaque veniam ut dicta voluptatum minima maxime vel. Distinctio amet possimus molestiae soluta.',
  },
  {
    id: '3',
    title: 'Speaker C',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores praesentium similique nemo obcaecati voluptate sit saepe, eaque veniam ut dicta voluptatum minima maxime vel. Distinctio amet possimus molestiae soluta.',
  },
];
