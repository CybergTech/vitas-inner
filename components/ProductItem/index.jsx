/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'
import MinusAndPlusButtons from './MinusAndPlusButtons'

function ProductItem ({ product, asList, showAddToCardButtons }) {
  return (
    <div className={`${styles.content} ${asList ? styles.asList : ''}`}>
      <div className={`${styles.heartIcon} ${asList ? styles.hide : ''}`}>
        <FontAwesomeIcon icon="heart" color="#E2352D" />
      </div>

      <img
        className={`${styles.productImage} ${asList ? styles.asListImage : ''}`}
        src="/images/products/alicate.svg"
        alt="Alicate Espícula"
      />

      <div className={`${styles.productInfo} ${asList ? styles.asListInfo : ''}`}>
        <h4 className={styles.category}>Alicates e Pinças</h4>
        <h3 className={`${styles.name} ${asList ? styles.asListName : ''}`}>
          ALICATE DE CORTE ESPICULA
        </h3>

        <div className={styles.row}>
          <h4 className={styles.price}>
            R$ 69,90
            <span className={styles.oldPrice}>R$ 71,20</span>
          </h4>

          {showAddToCardButtons && <MinusAndPlusButtons />}
          <button type="button" className={`${styles.purchaseButton} ${asList ? styles.asListButton : ''}`}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
