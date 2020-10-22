import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Reminders () {
  return (
    <div className={styles.reminders}>
      <button className={styles.reminder}>
        <Link href="/dashboard">
          <a>
            <h4 className={styles.number}>2</h4>
            <h5 className={styles.name}>SAC</h5>
          </a>
        </Link>
      </button>
      <button className={styles.reminder}>
        <Link href="/dashboard">
          <a>
            <h4 className={styles.number}>4</h4>
            <h5 className={styles.name}>Novos Pedidos</h5>
          </a>
        </Link>
      </button>
      <button className={styles.reminder}>
        <Link href="/dashboard">
          <a>
            <h4 className={styles.number}>1</h4>
            <h5 className={styles.name}>Para Hoje</h5>
          </a>
        </Link>
      </button>
    </div>
  )
}

export default Reminders
