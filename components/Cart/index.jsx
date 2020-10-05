/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ProductItem from '../ProductItem'
import LineDivision from '../LineDivision'

import styles from './styles.module.css'

function Cart ({ withAddress }) {
  return (
    <aside className={`${styles.container} ${withAddress && styles.withAddress}`}>
      {withAddress &&
        <>
          <div className={styles.addressContainer}>
            <h4 className={styles.subtitle}>ENDEREÇO</h4>

            <div className={styles.addressContent}>
              <h5 className={styles.addressType}>Você irá retirar a compra em:</h5>

              <button type="button" className={styles.item}>
                <div className={`${styles.itemSelected} ${styles.isSelected}`}>
                  <FontAwesomeIcon icon="warehouse" className={styles.selectedIcon} />
                </div>

                <div className={styles.itemContent}>
                  <h5 className={styles.text}>
                    <span className={styles.contentTitle}>Loja Vita&apos;s Centro</span>
                    Lourenço Pinto, 47<br/>
                    Centro - Curitiba, Paraná - CEP 12309-984
                  </h5>
                </div>
              </button>
            </div>
          </div>

          <LineDivision style={{
            margin: '1.8rem 0',
            width: '40%',
            height: '0',
            borderColor: '#EEEEEE55'
          }} />
        </>
      }

      <div className={styles.productsContainer}>
        <h4 className={styles.subtitle}>MINHA SACOLA DE COMPRAS</h4>

        <div className={styles.productsWrapper}>
          <ProductItem asList showAddToCardButtons />
          <ProductItem asList showAddToCardButtons />
          <ProductItem asList showAddToCardButtons />
        </div>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.options}>
          <button
            type="button"
            className={styles.optionButton}
          >
            Aplicar cupom de desconto
          </button>

          <button
            type="button"
            className={styles.optionButton}
          >
            Limpar Carrinho
          </button>
        </div>

        <div className={styles.row}>
          <div className={styles.price}>
            <span className={styles.priceText}>Total:</span><br />
            R$ 113,40
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Cart
