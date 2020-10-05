import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function CreditCardItem ({ card, style, withoutCheck }) {
  return (
    <div
      className={styles.content}
      style={style}
    >
      {!withoutCheck &&
        <div className={styles.select}>
          <FontAwesomeIcon icon="check-circle" className={styles.icon} />
        </div>
      }

      <div className={styles.info}>
        <span className={styles.number}>
          {card.number}
        </span>
        <img
          className={styles.flag}
          src={`/images/flags/${card.flag}`}
          alt="Mercur"
        />
      </div>
    </div>
  )
}

export default CreditCardItem
