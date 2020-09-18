import React from 'react'

import styles from './styles.module.css'

function MinusAndPlusButtons () {
  return (
    <div className={styles.container}>
      <input
        type="image"
        src="/images/icons/minus.svg"
        className={styles.button}
      />

      <span className={styles.quantity}>1</span>

      <input
        type="image"
        src="/images/icons/plus.svg"
        className={styles.button}
      />
    </div>
  )
}

export default MinusAndPlusButtons
