/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Logo ({ dark = false }) {
  const filename = dark ? 'dark-logo' : 'light-logo'

  return (
    <Link href="/">
      <a>
        <img
          src={`/images/${filename}.png`}
          alt="Vita's - Bem Estar"
          className={styles.logoImage}
        />
      </a>
    </Link>
  )
}

export default Logo
