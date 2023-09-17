import { useCallback, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Category, type Product } from '@prisma/client';

import { Dropdown, Accordion } from '~/components';

import { api } from '~/utils/api';

import styles from './products.module.css';

const CATEGORIES: Category[] = Object.keys(Category).sort((a, b) => {
  return a.localeCompare(b);
}) as Category[];

export default function Products() {
  const router = useRouter();

  const selectedCategory = router.query.category as Category;

  const setSelectedCategory = useCallback(
    (newValue: Category) => {
      void router.replace({ query: { category: newValue } }, undefined, { shallow: true });
    },
    [router]
  );

  const { data, isLoading, error, isError } = api.products.getSubCategoriesFromCategories.useQuery({
    category: selectedCategory,
  });

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(CATEGORIES[0]!);
    }
  }, [selectedCategory, setSelectedCategory]);

  if (isLoading) {
    return;
  }

  if (isError || !Object.keys(Category).includes(selectedCategory)) {
    return (
      <div>
        <p>{error?.message}</p>
        <p>{error?.data?.code}</p>
        <p>{error?.data?.httpStatus}</p>
      </div>
    );
  }

  if (!data) {
    return <p>No data</p>;
  }

  function createHandleClick(product?: Product) {
    return () => {
      void router.push(`${router.pathname}/${product?.subCategory}`);
    };
  }

  return (
    <>
      <Head>
        <title>Welcome to the store</title>
        <meta name="description" />
      </Head>
      <main className={styles.background}>
        <div className={styles.mainColumn}>
          <h1 className={styles.title}>Welcome to the store!</h1>
          <div className={styles.dropdown}>
            <Dropdown values={CATEGORIES} selectedValue={selectedCategory} setSelectedValue={setSelectedCategory} />
          </div>
          <Accordion createHandleClick={createHandleClick} products={data} />
        </div>
      </main>
    </>
  );
}
