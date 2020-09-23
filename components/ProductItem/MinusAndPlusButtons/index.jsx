/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function MinusAndPlusButtons ({ style, buttonsStyle }) {
  return (
    <div
      className={styles.container}
      style={style}
    >
      <input
        type="image"
        src="/images/icons/minus.svg"
        className={styles.button}
        style={buttonsStyle}
      />

      <span className={styles.quantity}>1</span>

      <input
        type="image"
        src="/images/icons/plus.svg"
        className={styles.button}
        style={buttonsStyle}
      />
    </div>
  )
}

export default MinusAndPlusButtons
