import React from 'react'

import styles from './styles.module.css'

function Logo () {
  return (
    <a href="http://localhost:3000">
      <img
        src="/images/logo.png"
        alt="Vita's - Bem Estar"
        className={styles.logoImage}
      />
    </a>
  )
}

export default Logo
