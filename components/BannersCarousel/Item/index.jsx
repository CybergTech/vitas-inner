/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Item ({ banner }) {
  return (
    <Link href={banner.url}>
      <a className={styles.item} title="Clique para saber mais">
        <img
          src={`/images/banners/${banner.src}`}
          alt={`Banner ${banner.src}`}
          className={styles.item}
        />
      </a>
    </Link>
  )
}

export default Item
