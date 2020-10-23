/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AsideBar from '../../../components/AsideBar'
import Header from '../../../components/Header'
import Clock from '../../../components/Clock'
import ProductsBrief from '../../../components/ProductsBrief'
import Button from '../../../components/Button'

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

  useEffect(() => {
    if (localStorage.minimizedMenu !== undefined) {
      setMinimizedMenu(localStorage.minimizedMenu === 'true')
    }
  }, [])

  function handleShowProductsList () {
    setText(<FontAwesomeIcon icon="spinner" pulse className={styles.loadingIcon} />)
    document.querySelector(`.${styles.wrapper}`).classList.add(styles.active)
  }

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Painel - Produtos - Ecovitas Marketplace</title>
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
            <Button
              icon="plus"
              text="Adicionar produto"
              link="/dashboard/produtos/cadastrar"
            />

            <Button
              icon="th-list"
              text="Lista dos produtos"
              link="/dashboard/produtos/lista"
            />
          </div>

          <div className={styles.row}>
            <ProductsBrief completeVersion />
          </div>
        </section>

        <section className={mainStyles.section}>
          <Button
            icon="th-list"
            text="Mostrar aqui minha lista de produtos"
            onClick={() => handleShowProductsList()}
          />

          <div className={styles.wrapper}>
            {text}
          </div>
        </section>
      </main>
    </div>
  )
}

export default productPainel
