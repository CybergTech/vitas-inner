import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Loading () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FontAwesomeIcon icon="spinner" className={styles.icon} pulse />
      </div>
    </div>
  )
}

export default Loading
