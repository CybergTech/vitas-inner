/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function DetailDots ({ style }) {
  return (
    <div className={styles.container}>
      <img
        src="/images/detail-dots.svg"
        alt="Detail Dots"
        style={style}
        className={styles.detailsDots}
      />
    </div>
  )
}

export default DetailDots
