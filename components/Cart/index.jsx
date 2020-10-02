import React from 'react'

import ProductItem from '../ProductItem'

import styles from './styles.module.css'

function Cart () {
  return (
    <aside className={styles.container}>
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
