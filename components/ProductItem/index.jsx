/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function ProductItem ({ product }) {
  return (
    <div className={styles.content}>
      <div className={styles.heartIcon}>
        <FontAwesomeIcon icon="heart" color="#E2352D" />
      </div>

      <img
        className={styles.productImage}
        src="/images/products/alicate.svg"
        alt="Alicate Espícula"
      />

      <div className={styles.productInfo}>
        <h4 className={styles.category}>Alicates e Pinças</h4>
        <h3 className={styles.name}>ALICATE DE CORTE ESPICULA</h3>

        <div className={styles.row}>
          <h4 className={styles.price}>R$ 69,90</h4>
          <button type="button" className={styles.purchaseButton}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
