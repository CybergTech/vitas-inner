import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Nav () {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        <span className={styles.btnText}>CATEGORIAS</span> <FontAwesomeIcon icon="chevron-down" size="xs" />
      </button>
    </div>
  )
}

export default Nav
