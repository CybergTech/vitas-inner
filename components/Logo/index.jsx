import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Logo () {
  return (
    <Link href="/">
      <a>
        <img
          src="/images/new-logo.png"
          alt="Vita's - Bem Estar"
          className={styles.logoImage}
        />
      </a>
    </Link>
  )
}

export default Logo
