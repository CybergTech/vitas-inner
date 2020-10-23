/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import AsideBar from '../components/AsideBar'
import Header from '../components/Header'
import Clock from '../components/Clock'
import Button from '../components/Button'

import grid from '../styles/grid/dashboard.module.css'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/404.module.css'

const paths = []

function Custom404 () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  useEffect(() => {
    if (localStorage.minimizedMenu !== undefined) {
      setMinimizedMenu(localStorage.minimizedMenu === 'true')
    }
  }, [])

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Página não encontrada - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar minimizedMenu={minimizedMenu} />
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
            <Clock />
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={styles.container}>
            <h2>A página que você está buscando não foi encontrada :/</h2>
            <p>Isso pode ter acontecido por que o conteúdo não está mais no ar ou você pode ter digitado o endereço errado.</p>

            <Button
              icon="chevron-left"
              text="Voltar à página principal"
              link="/dashboard"
              style={{ marginTop: '1rem' }}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Custom404
