import React from 'react'

import styles from './styles.module.css'

function PromotionalCards () {
  return (
    <section className={styles.container}>
      <div className={styles.backDetail}></div>

      <div className={styles.cardsContainer}>
        <div className={styles.item}>
          <img
            src="/images/products/mascara.svg"
            alt="50 máscaras descartáveis"
            style={{ width: '100%' }}
          />
        </div>

        <div className={styles.item}>
          <img
            src="/images/products/mascara.svg"
            alt="50 máscaras descartáveis"
            style={{ width: '100%' }}
          />
        </div>

        <div className={styles.item}>
          <img
            src="/images/products/mascara.svg"
            alt="50 máscaras descartáveis"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </section>
  )
}

export default PromotionalCards
