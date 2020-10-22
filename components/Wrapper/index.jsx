/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function Wrapper ({ title, style, children }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div
        style={style}
        className={styles.contentContainer}
      >
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Wrapper
