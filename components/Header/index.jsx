/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import Logo from '../Logo'

import styles from './styles.module.css'

function Header () {
  return (
    <div className={styles.container}>
      <hr className={styles.divisionLine} />

      <nav className={styles.nav}>
        <div className={styles.row}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>

          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a>
                  Quem Somos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  Como vender conosco
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  Contato
                </a>
              </Link>
            </li>
          </ul>

          <Link href="/">
            <a className={styles.sellerLink}>
              Área do lojista
            </a>
          </Link>

          <div className={styles.registerLinkContainer}>
            <Link href="/">
              <a className={styles.registerLink}>
                Cadastre-se
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <div className={styles.info}>
        <h2>O novo <span>marketplace</span> da <span>área médica</span></h2>
        <h4>feito sob medida para impulsionar suas vendas</h4>
      </div>
    </div>
  )
}

export default Header
