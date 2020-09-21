/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function BrandItem ({ brand }) {
  return (
    <div className={styles.content} title={`${brand.name} | ${brand.slogan}`}>
      <div className={styles.heartIcon}>
        <img src="/images/icons/empty-heart.svg" alt="Heart icon" />
      </div>

      <img
        className={styles.brandLogo}
        src={`/images/brands/${brand.src}`}
        alt="Mercur"
      />
    </div>
  )
}

export default BrandItem
