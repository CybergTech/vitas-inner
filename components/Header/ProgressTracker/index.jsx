/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function ProgressTracker ({ id, address, payment, checkout }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li
          className={`
            ${styles.listItem}
            ${id === false && styles.isActive}
            ${id === true && styles.isComplete}
          `}
        >
          <Link href="/identificacao">
            <a>
              <FontAwesomeIcon icon="user-alt" className={styles.icon} />
              Identificação
            </a>
          </Link>

          <div className={styles.detail}>
            {id === true &&
              <FontAwesomeIcon icon="check" className={styles.icon} />
            }
          </div>
        </li>

        <li
          className={`
            ${styles.listItem}
            ${address === false && styles.isActive}
            ${address === true && styles.isComplete}
          `}
        >
          <Link href="/endereco">
            <a>
              <FontAwesomeIcon icon="map-marker-alt" className={styles.icon} />
              Endereço
            </a>
          </Link>

          <div className={styles.detail}>
            {address === true &&
              <FontAwesomeIcon icon="check" className={styles.icon} />
            }
          </div>
        </li>

        <li
          className={`
            ${styles.listItem}
            ${payment === false && styles.isActive}
            ${payment === true && styles.isComplete}
          `}
        >
          <Link href="/pagamento">
            <a>
              <FontAwesomeIcon icon="credit-card" className={styles.icon} />
              Pagamento
            </a>
          </Link>

          <div className={styles.detail}>
            {payment === true &&
              <FontAwesomeIcon icon="check" className={styles.icon} />
            }
          </div>
        </li>

        <li
          className={`
            ${styles.listItem}
            ${checkout === false && styles.isActive}
            ${checkout === true && styles.isComplete}
          `}
        >
          <Link href="/checkout">
            <a>
              <FontAwesomeIcon icon="check-circle" className={styles.icon} />
              Checkout
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProgressTracker
