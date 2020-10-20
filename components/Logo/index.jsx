/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Logo ({ dark = false, minimizedLogo = false }) {
  let filename = dark ? 'dark-logo' : 'logo-vet'
  filename = minimizedLogo === true ? 'minimized-logo' : filename

  return (
    <Link href="/">
      <a>
        <img
          src={`/images/${filename}.png`}
          alt="ecovitas-marketplace"
          className={styles.logoImage}
        />
      </a>
    </Link>
  )
}

export default Logo
