import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LineDivision from '../../LineDivision'
import Search from '../Search'
import CartModal from './CartModal'

import styles from './styles.module.css'

function Nav () {
  const [showModal, setShowModal] = useState(false)

  function handleShowModal (show = true) {
    setShowModal(show)
  }

  return (
    <nav className="nav">
      <ul className={styles.list}>
        <li className={`${styles.listItem} stickyItem`}>
          <Link href="/">
            <a>CATEGORIAS</a>
          </Link>
        </li>
        <li className={`${styles.listItem} stickyItem`}>
          <Search little biggerModal={true} />
        </li>

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
          <Link href="/conta/entrar">
            <a>ENTRAR</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/conta/lista-de-desejos">
            <a>LISTA DE DESEJOS</a>
          </Link>
        </li>

        <li className={styles.listItem}>
          <LineDivision />
        </li>

        <li
          className={`${styles.listItem} ${styles.cartContainer} ${showModal && styles.zIndex}`}
          title="Sua sacola de compras"
        >
          <div
            className={`${styles.cartBackground} ${showModal ? styles.show : styles.hide}`}
            onClick={() => handleShowModal(false)}
          ></div>

          <div
            className={`${styles.cartItem} ${showModal && styles.zIndex}`}
            onMouseEnter={() => handleShowModal()}
            onMouseLeave={() => handleShowModal(false)}
          >
            <h4 className={styles.cartTitle}>
              <FontAwesomeIcon icon="briefcase-medical" /> <div className={styles.circle}>2</div>
            </h4>

            <CartModal showModal={showModal} />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
