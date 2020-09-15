/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function BrandItem ({ brand }) {
  return (
    <div className={styles.content}>
      <div className={styles.heartIcon}>
        <FontAwesomeIcon icon="heart" color="#E2352D" />
      </div>

      <img
        className={styles.brandLogo}
        src="/images/brands/mercur.svg"
        alt="Mercur"
      />
    </div>
  )
}

export default BrandItem
