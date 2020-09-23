/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function BrandItem ({ brand, style }) {
  return (
    <div
      className={styles.content}
      title={`${brand.name} | ${brand.slogan}`}
      style={style}
    >
      <div className={styles.heartIcon}>
        <input
          type="image"
          src="/images/icons/empty-heart.svg"
          title="Adicionar à Lista de Desejos"
        />
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
