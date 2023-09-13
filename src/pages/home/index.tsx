import type { SyntheticEvent } from 'react';
import { Dropdown, Accordion } from '~/components';
import type { IAccordionItem } from '~/interfaces';

import styles from './home.module.css';
import { api } from '~/utils/api';

import { Category } from '@prisma/client';
import Head from 'next/head';
import { getTitleCaseFromCamelCase } from '~/utils';

const options = Object.keys(Category).map((category) => getTitleCaseFromCamelCase(category));

export default function Home() {
  const { data } = api.items.getItems.useQuery();

  function handleSelect(e: SyntheticEvent<HTMLSelectElement, Event>) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Welcome to the store</title>
        <meta name="description" />
      </Head>
      <main className={styles.background}>
        <div className={styles.mainColumn}>
          <h2>Welcome to the store!</h2>
          <Dropdown options={options} onSelect={handleSelect} />
          <Accordion items={data} />
        </div>
      </main>
    </>
  );
}
