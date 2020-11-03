/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function Table ({ fitContent, withoutBack, children }) {
  return (
    <table
      className={`${styles.table} ${fitContent ? styles.fitContent : ''} ${withoutBack ? styles.withoutBack : ''}`}
    >
      {children}
    </table>
  )
}

export default Table
