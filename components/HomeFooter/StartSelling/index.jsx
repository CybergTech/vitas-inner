import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function StartSelling () {
  return (
    <div className={styles.container}>
      <img
        src="/images/banner.png"
        alt="Banner-Ecovitas"
        className={styles.banner}
      />

      <div className={styles.content}>
        <h2>Anuncie agora mesmo e veja suas vendas aumentarem!</h2>

        <button>
          <Link href="/">
            <a>
              Começar a vender
            </a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default StartSelling
