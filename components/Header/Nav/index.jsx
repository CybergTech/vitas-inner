import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LineDivision from '../../LineDivision'

import styles from './styles.module.css'

function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a>QUEM SOMOS</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a>FALE CONOSCO</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/account/signin">
            <a>ENTRAR</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a>LISTA DE DESEJOS</a>
          </Link>
        </li>

        <li className={styles.listItem}>
          <LineDivision />
        </li>

        <li className={styles.listItem} title="Sua sacola de compras">
          <Link href="/">
            <a className={styles.cartItem}>
              <FontAwesomeIcon icon="briefcase-medical" /> <div className={styles.circle}>2</div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
