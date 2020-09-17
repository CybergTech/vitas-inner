/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import ProductItem from '../../../ProductItem'
import LineDivision from '../../../LineDivision'

import styles from './styles.module.css'

function Modal ({ showModal, bigger }) {
  return (
    <>
      {/* <div className={styles.background}></div> */}
      <div
        className={`
          ${styles.container}
          ${bigger ? styles.bigger : ''}
          ${showModal ? styles.show : styles.hide}
        `}
      >
        <div className={styles.productsContainer}>
          <h4 className={styles.subtitle}>POPULARES</h4>

          <div className={styles.productsWrapper}>
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
            <ProductItem asList />
          </div>
        </div>

        <LineDivision style={{
          height: '100%', margin: '0 20px'
        }} />

        <div className={styles.othersContainer}>
          <h4 className={styles.subtitle}>CATEGORIAS</h4>

          <div className={styles.othersWrapper}>
            <ul className={styles.othersList}>
              <li>
                <Link href="#!">
                  <a>Máscaras Descartáveis</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
