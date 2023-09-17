import { useRef, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { type Product } from '@prisma/client';

import { Accordion, Modal, OrderMenu, type ModalHandle } from '~/components';

import { getTitleCaseFromCamelCase } from '~/utils';
import { api } from '~/utils/api';

import styles from './subCategory.module.css';

export default function SubCategory() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const modalRef = useRef<ModalHandle>(null);

  const subCategory = (router.query.subCategory ?? '') as string;
  const { data, isLoading, error, isError } = api.products.getProductsFromSubCategories.useQuery({
    subCategory: subCategory,
  });

  function handleCancel() {
    modalRef.current?.hide();
  }

  function handleConfirm() {
    modalRef.current?.hide();
  }

  function createHandleClick(product?: Product) {
    return () => {
      setSelectedProduct(product);
      modalRef.current?.show();
    };
  }

  return (
    <>
      <Head>
        <title>{getTitleCaseFromCamelCase(subCategory)}</title>
        <meta name="description" />
      </Head>
      <main className={styles.background}>
        <div className={styles.mainColumn}>
          <h1 className={styles.title}>{getTitleCaseFromCamelCase(subCategory)}</h1>
          <Accordion createHandleClick={createHandleClick} products={data} />
        </div>
      </main>
      <Modal ref={modalRef}>
        <OrderMenu handleCancel={handleCancel} handleConfirm={handleConfirm} product={selectedProduct} />
      </Modal>
    </>
  );
}
