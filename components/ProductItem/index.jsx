/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button'

import styles from './styles.module.css'

function ProductItem ({ product, asList, showAddToCardButtons }) {
  return (
    <div className={`${styles.content} ${asList ? styles.asList : ''}`}>
      <Link href="/produto/meia">
        <a className={styles.link}>
          <div
            className={`${styles.sex} ${asList ? styles.hide : ''}`}
          >
            <FontAwesomeIcon icon="female" />
            <span>Produto feminino</span>
          </div>

          <img
            className={`${styles.productImage} ${asList ? styles.asListImage : ''}`}
            src="/images/products/alicate.png"
            alt="Alicate Espícula"
          />

          <div className={`${styles.productInfo} ${asList ? styles.asListInfo : ''}`}>
            <h4 className={styles.category}>Alicates e Pinças</h4>
            <h3 className={`${styles.name} ${asList ? styles.asListName : ''}`}>
              Alicate de Corte Espícula
            </h3>

            <div className={styles.row}>
              <h4 className={styles.price}>
                R$ 69,90
              </h4>

              <Button
                text="Cadastrar"
                darkestBackground
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductItem
