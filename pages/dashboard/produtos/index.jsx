import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AsideBar from '../../../components/AsideBar'
import Header from '../../../components/Header'
import Clock from '../../../components/Clock'
import ProductsBrief from '../../../components/ProductsBrief'

import grid from '../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../styles/main.module.css'
import styles from '../../../styles/Dashboard.module.css'

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Produtos',
    href: '/dashboard/produtos'
  }
]

function productPainel () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)
  const [text, setText] = useState('')

  function handleShowProductsList () {
    setText(<FontAwesomeIcon icon="spinner" pulse className={styles.loadingIcon} />)
    document.querySelector(`.${styles.wrapper}`).classList.add(styles.active)
  }

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Dashboard - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="product-painel" minimizedMenu={minimizedMenu} />
      </aside>

      <header className={grid.header}>
        <Header
          minimizedMenu={minimizedMenu}
          setMinimizedMenu={setMinimizedMenu}
          paths={paths}
        />
      </header>

      <main className={grid.main}>
        <section className={mainStyles.section}>
          <div className={styles.row}>
            <div className={`${styles.flexColumn}`}>
              <div className={styles.row}>
                <Clock />
              </div>
            </div>
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={`${styles.row} ${styles.start}`}>
            <button className={styles.button}>
              <Link href="/dashboard/produtos/cadastrar">
                <a>
                  <FontAwesomeIcon icon="plus" className={styles.icon} />
                  Adicionar produto
                </a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/dashboard/produtos/lista">
                <a>
                  <FontAwesomeIcon icon="th-list" className={styles.icon} />
                  Lista dos produtos
                </a>
              </Link>
            </button>
          </div>

          <div className={styles.row}>
            <ProductsBrief completeVersion />
          </div>
        </section>

        <section className={mainStyles.section}>
          <button
            className={styles.transparentButton}
            onClick={() => handleShowProductsList()}
          >
            Mostrar aqui minha lista de produtos
            <FontAwesomeIcon icon="chevron-down" className={styles.icon} />
          </button>

          <div className={styles.wrapper}>
            {text}
          </div>
        </section>
      </main>
    </div>
  )
}

export default productPainel
